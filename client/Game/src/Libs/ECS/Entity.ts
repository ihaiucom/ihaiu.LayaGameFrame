import { Component, ComponentClass, EcsUid } from "./Component";
import { Engine } from "./Engine";

/** 实体改变监听器(组件添加、移除) */
type EntityChangeListener = (entity: Entity) => any;

/** 实体 */
export class Entity 
{
    engine: Engine;

    /** 实体ID */
    private _id: string | number | null = null;
    /** 组件字典 */
    private readonly _components: { [tag: string]: Component } = {};
    /** 实体组件添加、移除时 监听器列表 */
    private readonly _listeners: EntityChangeListener[] = [];
    /** 组件类列表 */
    private readonly _componentClasses: 
    {
        [tag: string]: ComponentClass<Component>;
    } = {};

    /**
     * 获取 实体ID
     * @throws when the id is null.
     */
    get id(): string | number 
    {
        if (this._id === null) 
        {
            throw new Error("Cannot retrieve an ID when is null.");
        }
        return this._id;
    }

    /**
     * 设置 实体ID
     * @throws when the new value is null or undefined or the id is already set.
     */
    set id(value: string | number) 
    {
        if (value === null || value === undefined) 
        {
            throw new Error(`Entity.set id 不能是 null 或者 undefine.`);
        }

        if (this._id !== null) 
        {
            throw new Error(`Entity id 已经设置过 "${this._id}".`);
        }
        this._id = value;
    }

    /**
     * 检查实体是否是新创建的
     */
    isNew() : boolean
    {
        return this._id === null;
    }

    /**
     * 生成组件列表
     * @returns 返回该实体的组件列表.
     */
    listComponents() : Component[]
    {
        return Object.keys(this._components).map(i => this._components[i]);
    }

    /**
     * 生成组件列表
     * 包含Class
     * @returns 返回该实体的组件和组件类列表.
     */

    listComponentsWithTypes() :{component:Component; type: ComponentClass<Component>;}[]
    {
        return Object.keys(this._components).map(i => (
            {
            component: this._components[i],
            type: this._componentClasses[i]
        }));
    }

    /**
     * 生成只读的组件列表，使用tag获取
     * @returns []
     */
    listComponentsWithTags() : Readonly< { tag: string; component: Component; }>[]
    {
        return Object.keys(this._components).map(tag =>
            Object.freeze({
                tag,
                component: this._components[tag]
            })
        );
    }

    /**
     * 检查 实体是否包含 该组件
     * @throws 如果检查到该类型的组件，但该组件不是从该类型示例化的就抛异常
     * @param componentClass 组件类.
     */
    hasComponent<T extends Component>(componentClass: ComponentClass<T>) {
        const tag = componentClass.tag || componentClass.name;
        const component = this._components[tag];
        if (!component) return false;
        if (!this.cast(component, componentClass)) {
            throw new Error(
                `Entity.hasComponent 可能有多个组件类ComponentClass的 tag "${tag}".\n 是一样的`
            );
        }
        return true;
    }

    /**
     * 获取该组件类的组件实体
     * @throws 如果检查到该类型的组件，但该组件不是从该类型示例化的就抛异常
     * @throws 如果该实体不存在该类型组件 抛异常
     * @param componentClass The class of the component.
     */
    getComponent<T extends Component>(componentClass: ComponentClass<T>): T {
        const tag = componentClass.tag || componentClass.name;
        const component = this._components[tag];
        if (!component) {
            throw new Error(`Entity.getComponent 该实体没有找到该组件 "${tag}" .`);
        }
        if (!this.cast(component, componentClass)) {
            throw new Error(
                `Entity.getComponent 可能有多个组件类ComponentClass的 tag "${tag}".\n 是一样的`
            );
        }
        return component;
    }

    /**
     * 创建一个组件示例附加到该实体
     * @throws if the class than exists on the entity with that tag is different than the asked one.
     * @param componentClass 组件类.
     * @returns 组件示例.
     */
    addComponent<T extends Component>(componentClass: ComponentClass<T>): T 
    {
        const tag = componentClass.tag || componentClass.name;
        const component = this._components[tag];

        if (component) 
        {
            if (!this.cast(component, componentClass)) 
            {
                throw new Error(
                    `Entity.addComponent 可能有多个组件类ComponentClass的 tag "${tag}" ${componentClass.name}. 是一样的`
                );
            }
            delete this._components[tag];
            delete this._componentClasses[tag];
            component.dispose();
        }

        const newComponent: T = Laya.Pool.createByClass(componentClass);
        newComponent.isFromPool = true;
        newComponent.entity = this;

        this._components[tag] = newComponent;
        this._componentClasses[tag] = componentClass;

        for (let listener of this._listeners) 
        {
            listener(this);
        }

        if(this.engine)
            this.engine.addComponent(newComponent);
        return newComponent;
    }

    /**
     * 移除组件.
     * @throws 如果该实体不存在该组件，将会抛异常.
     * @throws if the class than exists on the entity with that tag is different than the asked one.
     * @param componentClass The class of the component.
     */
    removeComponent<T extends Component>(componentClass: ComponentClass<T>) 
    {
        const tag = componentClass.tag || componentClass.name;
        const component = this._components[tag];
        // 不存在该组件
        if (!component) 
        {
            throw new Error(`Entity.removeComponent 该实体没有找到该组件 "${tag}" .`);
        }

        // 该组件不是实例化自该类
        if (!this.cast(component, componentClass)) 
        {
            throw new Error(
                `Entity.removeComponent 可能有多个组件类ComponentClass的 tag "${tag}".\n 是一样的`
            );
        }

        delete this._components[tag];
        for (let listener of this._listeners) 
        {
            listener(this);
        }
        component.dispose();
    }

    /**
     * 检查该组件实例是否实现自该组件类
     * @param component 组件实例
     * @param componentClass 组件类
     */
    cast<T extends Component>(
        component: Component | undefined | null,
        componentClass: ComponentClass<T>
    ): component is T 
    {
        return !!(component && component instanceof componentClass);
    }

    /**
     * 添加监听器(实体 添加、移除组件)
     * @param listener 监听器
     */
    addListener(listener: EntityChangeListener) 
    {
        const index = this._listeners.indexOf(listener);
        if (index === -1) 
        {
            this._listeners.push(listener);
        }
        return this;
    }

    /**
     * 移除监听器 (实体 添加、移除组件)
     * @param listener 监听器.
     */
    removeListener(listener: EntityChangeListener) 
    {
        const index = this._listeners.indexOf(listener);
        if (index !== -1) 
        {
            this._listeners.splice(index, 1);
        }
        return this;
    }

    init()
    {
        this.id = EcsUid.UID();
    }

    destory()
    {
        let components = this.listComponents();
        for(let com of components)
        {
            this.removeComponent(<any>com.constructor);
        }

        if(this.engine)
            this.engine.removeEntity(this);
        
        this._id = null;
        this.poolRecover();
    }


    /** 丢回对象池 */
    public poolRecover()
    {
        Laya.Pool.recoverByClass(this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): Entity
    {
        let entity = Laya.Pool.createByClass(Entity);
        entity.init();
        return entity;
    }

}