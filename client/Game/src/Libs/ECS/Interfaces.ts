import { AssemblyNamespace } from "../AssemblyNamespace";
import { Engine } from "./Engine";
import EngineWorld from "./EngineWorld";

/** 类信息 */
export interface ClassType extends ObjectConstructor
{
    tag: string;
  readonly name: string;
  readonly prototype: object;
  readonly __namespace: AssemblyNamespace;
}





export interface IStartSystem
{
    handlerClassType: ClassType;
    Run(o: any, engine: EngineWorld);
}


export abstract class StartSystem<T> implements IStartSystem
{
    static readonly __namespace = AssemblyNamespace.ESystems;
    handlerClassType: ClassType;

    
    public Run(o: T, engine: EngineWorld)
    {
        this.start(o, engine);
    }

    abstract start(self: T, engine: EngineWorld): void;
}



export interface IUpdateSystem
{
    handlerClassType: ClassType;
    
    Run(o: any, engine: EngineWorld);
}


export abstract class UpdateSystem<T> implements IUpdateSystem
{
    static readonly __namespace = AssemblyNamespace.ESystems;
    handlerClassType: ClassType;
    
    public Run(o: T, engine: EngineWorld)
    {
        this.update(o, engine);
    }

    abstract update(self: T, engine: EngineWorld): void;
}



export interface ILateUpdateSystem
{
    handlerClassType: ClassType;
    
    Run(o: any, engine: EngineWorld);
}


export abstract class LateUpdateSystem<T> implements ILateUpdateSystem
{
    static readonly __namespace = AssemblyNamespace.ESystems;
    handlerClassType: ClassType;
    
    public Run(o: T, engine: EngineWorld)
    {
        this.lateUpdate(o, engine);
    }

    abstract lateUpdate(self: T, engine: EngineWorld): void;
}



export interface IDestroySystem
{
    handlerClassType: ClassType;
    
    Run(o: any, engine: EngineWorld);
}


export abstract class DestroySystem<T> implements IDestroySystem
{
    static readonly __namespace = AssemblyNamespace.ESystems;
    handlerClassType: ClassType;
    
    public Run(o: T, engine: EngineWorld)
    {
        this.destroy(o, engine);
    }

    abstract destroy(self: T, engine: EngineWorld): void;
}


