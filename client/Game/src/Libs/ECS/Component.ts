import { AssemblyNamespace } from "../AssemblyNamespace";
import { Entity } from "./Entity";
import { Engine } from "./Engine";

export class EcsUid
{
  private static _UID = 0;
  static  UID()
  {
    return this._UID ++;
  }
}

/** 组件 */
export interface IComponent 
{

    __InstanceId;
    constructor;
    engine: Engine ;
    entity: Entity ;
    isFromPool: boolean;
    isDisposed: boolean;
    dispose():void;
}

export class Component implements IComponent
{
    static readonly __namespace = AssemblyNamespace.EComponents;
    __InstanceId: int = 0;
    
    private _entity: Entity ;
    get entity(): Entity
    {
        return this._entity;
    }

    set entity(entity: Entity)
    {
        this._entity = entity;
    }

    
    private _engine: Engine ;
    get engine(): Engine
    {
        return this._engine;
    }

    set engine(engine: Engine)
    {
        this._engine = engine;
    }
    


    constructor()
    {
      this.__InstanceId = EcsUid.UID();
    }

    private _isFromPool: boolean;
    public get isFromPool(): boolean
    {
        return this._isFromPool;
    }

    public set isFromPool(val: boolean)
    {
        this._isFromPool = val;
        if(!this._isFromPool)
        {
            return;
        }

        if(this.__InstanceId == 0)
        {
            this.__InstanceId = EcsUid.UID();
        }
    }
    
		public get isDisposed(): boolean
		{
				return this.__InstanceId == 0;
    }
    
    release()
    {

    }
    
    dispose():void
    {
        if (this.isDisposed)
        {
          return;
        }

        this.engine.Destroy(this);
        this.engine.removeComponent(this.__InstanceId);
        this.engine = null;
        this.entity = null;
        
        this.__InstanceId = 0;
        
        this.release();
        if(this.isFromPool)
        {
            Laya.Pool.recoverByClass(this);
        }
    }
}

/** 组件类信息 */
export interface ComponentClass<T extends Component> 
{
  readonly name: string;
  readonly tag?: string;
  new(): T;
}
