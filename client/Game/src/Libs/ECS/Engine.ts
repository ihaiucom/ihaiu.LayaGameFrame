
import { Component } from "./Component";
import { Entity } from "./Entity";
import { System } from "./System";
import EngineWorld from "./EngineWorld";

/** 实体(添加、移除)监听器 */
export interface EngineEntityListener 
{
    onEntityAdded(entity: Entity): void;
    onEntityRemoved(entity: Entity): void;
}

/** 引擎: 运行环境世界 */
export class Engine extends EngineWorld
{
    /** 当前引擎 所有实体 */
    private _entities: Entity[] = [];
    /** 当前引擎 实体(添加、移除)监听器列表 */
    private readonly _entityListeners: EngineEntityListener[] = [];
    /**当前引擎 所有系统. */
    private readonly _systems: System[] = [];
    /** 是否需要刷新系统执行优先级排序 */
    private _systemsNeedSorting: boolean = false;
    /**
     * 获取当前所有实体.
     */
    get entities() : ReadonlyArray<Entity>
    {
        return Object.freeze(this._entities.slice(0));
    }

    /**
     * 设置是否需要刷新系统执行优先级排序.
     * @param system 系统
     */
    notifyPriorityChange(system: System) 
    {
        this._systemsNeedSorting = true;
    }

    /**
     * 添加 实体（添加、移除）监听器.
     * @param listener 实体（添加、移除）监听器
     */
    addEntityListener(listener: EngineEntityListener) 
    {
        if (this._entityListeners.indexOf(listener) === -1) 
        {
            this._entityListeners.push(listener);
        }

        return this;
    }

    /**
     * 移除 实体（添加、移除）监听器.
     * @param listener 实体（添加、移除）监听器
     */
    removeEntityListener(listener: EngineEntityListener) 
    {
        const index = this._entityListeners.indexOf(listener);
        if (index !== -1) 
        {
            this._entityListeners.splice(index, 1);
        }

        return this;
    }

    /**
     * 添加实体
     * 将会通知系统添加实体.
     * @param entity 实体
     */
    addEntity(entity: Entity) 
    {
        if (this._entities.indexOf(entity) === -1) 
        {
            this._entities.push(entity);
            for (let listener of this._entityListeners) 
            {
                listener.onEntityAdded(entity);
            }

            // 组件列表
            let list = entity.listComponents();
            for(let com of list)
            {
                this.addComponent(com);
            }

            entity.engine = this;
        }

        return this;
    }

    /**
     * 添加实体列表
     * @param entities 实体列表
     */
    addEntities(...entities: Entity[]) 
    {
        for (let entity of entities) 
        {
            this.addEntity(entity);
        }

        return this;
    }

    /**
     * 移除实体.
     * 将会通知系统移除了该实体.
     * @param entity 实体
     */
    removeEntity(entity: Entity) 
    {
        const index = this._entities.indexOf(entity);
        if (index !== -1) 
        {
            this._entities.splice(index, 1);
            for (let listener of this._entityListeners) 
            {
                listener.onEntityRemoved(entity);
            }

            
            // 组件列表
            let list = entity.listComponents();
            for(let com of list)
            {
                this.removeComponent(com.__InstanceId);
            }

            entity.engine = null;
        }
    }

    /**
     * 移除实体列表.
     * @param entities 实体列表
     */
    removeEntities(...entities: Entity[]) 
    {
        for (let entity of entities) 
        {
            this.removeEntity(entity);
        }
        return this;
    }

    /**
     * 添加系统.
     * @param system 系统.
     */
    addSystem(system: System) 
    {
        const index = this._systems.indexOf(system);
        if (index === -1) 
        {
            this._systems.push(system);
            system.onAttach(this);
            this._systemsNeedSorting = true;
        }
        return this;
    }

    /**
     * 添加系统列表.
     * @param systems 系统列表.
     */
    addSystems(...systems: System[]) 
    {
        for (let system of systems) 
        {
            this.addSystem(system);
        }
    }

    /**
     * 移除系统.
     * @param system 系统.
     */
    removeSystem(system: System) 
    {
        const index = this._systems.indexOf(system);
        if (index !== -1) 
        {
            this._systems.splice(index, 1);
            system.onDetach(this);
        }
        return this;
    }

    /**
     * 移除系统列表.
     * @param systems 系统列表.
     */
    removeSystems(...systems: System[]) 
    {
        for (let system of systems) 
        {
            this.removeSystem(system);
        }
    }

    /**
     * 刷新.
     * @param delta 间隔时间 毫秒.
     */
    update(delta: number) 
    {
        if (this._systemsNeedSorting) 
        {
            this._systemsNeedSorting = false;
            this._systems.sort((a, b) => a.priority - b.priority);
        }
        
        for (let system of this._systems) 
        {
            system.update(this, delta);
        }
    }
}

