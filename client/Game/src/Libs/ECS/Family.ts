import { Entity } from "./Entity";
import { Engine, EngineEntityListener } from "./Engine";
import { ComponentClass, Component } from "./Component";

/** 实体家族 */
export interface Family 
{
    readonly entities: ReadonlyArray<Entity>;

    /**
     * 检测该实体是否符合家族组件
     * @param entity 实体
     */
    includesEntity(entity: Entity): boolean;
}


abstract class AbstractFamily implements Family 
{
    /** 引擎 */
    private readonly _engine: Engine;
    /** 实体需要包含哪些组件 */
    private readonly _include: ReadonlyArray<ComponentClass<Component>>;
    /** 实体不可以有哪些组件 */
    private readonly _exclude: ReadonlyArray<ComponentClass<Component>>;

    constructor(
        engine: Engine,
        include: ComponentClass<Component>[],
        exclude: ComponentClass<Component>[]
    ) 
    {
        this._engine = engine;
        this._include = Object.freeze(include.slice(0));
        this._exclude = Object.freeze(exclude.slice(0));
    }

    
    /** 引擎 */
    get engine() 
    {
        return this._engine;
    }

    abstract readonly entities: ReadonlyArray<Entity>;

    
    /**
     * 检测该实体是否符合家族组件
     * @param entity 实体
     */
    includesEntity = (entity: Entity) => 
    {
        for (let include of this._include) 
        {
            if (!entity.hasComponent(include)) 
            {
                return false;
            }
        }

        for (let exclude of this._exclude) 
        {
            if (entity.hasComponent(exclude)) 
            {
                return false;
            }
        }
        return true;
    }


}

/** 家族--会缓存 */
class CachedFamily extends AbstractFamily  implements EngineEntityListener
{
    private _needEntityRefresh: boolean;
    private _entities: Entity[];

    constructor(
        engine: Engine,
        include: ComponentClass<Component>[],
        exclude: ComponentClass<Component>[]
    ) 
    {
        super(engine, include, exclude);
        const allEntities = this.engine.entities;
        this._entities = allEntities.filter(this.includesEntity);
        this.engine.addEntityListener(this);
        for (let entity of allEntities) {
            entity.addListener(this.onEntityAdded);
        }
        this._needEntityRefresh = false;
    }

    get entities() 
    {
        if (this._needEntityRefresh) 
        {
            this._needEntityRefresh = false;
            this._entities = this._entities.filter(this.includesEntity);
        }
        return Object.freeze(this._entities.slice(0));
    }

    /** 实体--添加 */
    onEntityAdded(entity: Entity) 
    {
        const index = this._entities.indexOf(entity);
        if (index === -1) 
        {
            this._entities.push(entity);
            this._needEntityRefresh = true;
            entity.addListener(this.onEntityChanged);
        }
    }

    /** 实体--移除 */
    onEntityRemoved(entity: Entity) 
    {
        const index = this._entities.indexOf(entity);
        if (index !== -1) 
        {
            const entity = this._entities[index];
            this._entities.splice(index, 1);
            entity.removeListener(this.onEntityChanged);
        }
    }

    /** 实体--改变 */
    onEntityChanged = (entity: Entity) => 
    {
        const index = this._entities.indexOf(entity);
        if (index === -1) {
            this._entities.push(entity);
            entity.addListener(this.onEntityChanged);
        }
        this._needEntityRefresh = true;
    };
}

/** 家族--不会缓存，每次获取都会重新过滤 */
class NonCachedFamily extends AbstractFamily 
{
    get entities() 
    {
        return this.engine.entities.filter(this.includesEntity);
    }
}


/** 家族构建器 */
export class FamilyBuilder 
{
    /** 引擎 */
    private _engine: Engine | null;
    /** 是否缓存的 */
    private _cached: boolean;
    
    /** 实体需要包含哪些组件 */
    private readonly _include: ComponentClass<Component>[];
    /** 实体不可以有哪些组件 */
    private readonly _exclude: ComponentClass<Component>[];
  
    constructor(engine?: Engine) 
    {
      this._engine = engine || null;
      this._include = [];
      this._exclude = [];
      this._cached = true;
    }
  
    /**
     * 设置 实体需要包含哪些组件
     * @param classes 组件类列表.
     */
    include(...classes: ComponentClass<Component>[]) 
    {
      this._include.push(...classes);
      return this;
    }

    /**
     * 设置 实体不可以有哪些组件
     * @param classes 组件类列表.
     */
    exclude(...classes: ComponentClass<Component>[]) 
    {
      this._exclude.push(...classes);
      return this;
    }
  
    
    /**
     * 设置引擎
     * @param engine 引擎.
     */
    changeEngine(engine: Engine) 
    {
      this._engine = engine;
      return this;
    }
  
    /** 是设置是否会缓存的 */
    setCached(cached: boolean) 
    {
      this._cached = cached;
    }
  
    /**
     * 构建
     * @returns 返回一个家族
     */
    build(): Family
    {
      if (!this._engine) 
      {
          throw new Error("ECS: 构建家族必须设置engine.");
      }

      if (!this._cached) 
      {
          return new NonCachedFamily(this._engine, this._include, this._exclude);
      }

      return new CachedFamily(this._engine, this._include, this._exclude);
    }
  }
  