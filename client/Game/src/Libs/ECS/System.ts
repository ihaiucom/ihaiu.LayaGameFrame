import { Engine } from "./Engine";
import { AssemblyNamespace } from "../AssemblyNamespace";
import { EcsUid } from "./Component";

export abstract class System
{
    static readonly __namespace = AssemblyNamespace.ECSSystems;
    __InstanceId: int = 0;
    
    /** 运行优先级 */
    private _priority: number;
    private readonly _engines: Engine[];

    constructor() 
    {
        this.__InstanceId = EcsUid.UID();
        
        this._priority = 0;
        this._engines = [];
    }

    /** 运行优先级 */
    get priority() 
    {
        return this._priority;
    }


    set priority(value: number) 
    {
        this._priority = value;
        for (let engine of this._engines) 
        {
            engine.notifyPriorityChange(this);
        }
    }

    /** 引擎列表 */
    get engines() 
    {
        return Object.freeze(this._engines.slice(0));
    }

    /** 被添加到引擎 */
    onAttach(engine: Engine) 
    {
        const index = this._engines.indexOf(engine);
        if (index === -1) 
        {
            this._engines.push(engine);
        }
    }

    /** 从引擎中移除 */
    onDetach(engine: Engine) 
    {
        const index = this._engines.indexOf(engine);
        if (index !== -1) 
        {
            this._engines.splice(index, 1);
        }
    }

    abstract update(engine: Engine, delta: number): void;
}
