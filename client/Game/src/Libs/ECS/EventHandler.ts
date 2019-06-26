import { AssemblyNamespace } from "../AssemblyNamespace";
import { ClassType } from "./Interfaces";
import { Engine } from "./Engine";
import EngineWorld from "./EngineWorld";

/** 类信息 */
export interface EventClassType extends ClassType
{
  readonly __eventType: string;
}


export interface IEvent
{
    Handle(...args):void;
    engine: Engine;
}


export abstract class EventHandler implements IEvent
{
    static readonly __namespace = AssemblyNamespace.EEvents;
    static __eventType: string;
    engine: Engine;


    public Handle(...args)
    {
        this.Run(...args);
    }

    public abstract Run(...args): void;
}
