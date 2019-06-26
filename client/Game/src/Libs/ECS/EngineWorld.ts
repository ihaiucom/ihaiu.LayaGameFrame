import Dictionary from "../Helpers/Dictionary";
import { IComponent } from "./Component";
import UnOrderMultiMap from "../Helpers/UnOrderMultiMap";
import { ClassType, IStartSystem, IUpdateSystem, ILateUpdateSystem, StartSystem, UpdateSystem, LateUpdateSystem, DestroySystem, IDestroySystem } from "./Interfaces";
import Log from "../../GameFrame/Log/Log";
import Assembly from "../Assembly";
import { AssemblyNamespace } from "../AssemblyNamespace";
import { IEvent, EventClassType } from "./EventHandler";

/** 驱动引擎 */
export default class EngineWorld
{
    /** 所有组件字典 <Component.__uid, Component> */
    private readonly allComponents = new Dictionary<int, IComponent>();
    
    private readonly allEvents = new UnOrderMultiMap<string, IEvent>();


    private readonly startSystems = new UnOrderMultiMap<ClassType, IStartSystem>();
    
    private readonly updateSystems = new UnOrderMultiMap<ClassType, IUpdateSystem>();
    
    private readonly lateUpdateSystems = new UnOrderMultiMap<ClassType, ILateUpdateSystem>();

    private readonly destroySystems = new UnOrderMultiMap<ClassType, IDestroySystem>();

    private loaders: int[] = [];
    private loaders2: int[] = [];

    private starts:int[] = [];

    private updates:int[] = [];
    private updates2:int[] = [];

    private lateUpdates: int[] = [];
    private lateUpdates2: int[] = [];

    isInitFormAssembly = false;
    /** 注册程序集 */
    public initFormAssembly()
    {
        if(this.isInitFormAssembly)
            return;

        this.isInitFormAssembly = true;

        // 注册系统处理器
        let systemClassList = Assembly.get(AssemblyNamespace.ESystems);
        if(systemClassList)
        {
            for(let classType of systemClassList)
            {
                this.registerSystem(classType);
            }
        }

        // 注册事件处理器
        let eventClassList: EventClassType[] = <EventClassType[]> Assembly.get(AssemblyNamespace.EEvents);
        if(eventClassList)
        {
            for(let classType of eventClassList)
            {
                let e = new classType();
                this.registerEvent(classType.__eventType, <IEvent> e);
            }
        }
    }

    /** 注册系统 */
    public registerSystem(classType: ClassType)
    {
        let system = new classType();

        if(system instanceof StartSystem)
        {
            this.startSystems.addItem(system.handlerClassType, system);
        }
        else if(system instanceof UpdateSystem)
        {
            this.updateSystems.addItem(system.handlerClassType, system);
        }
        else if(system instanceof LateUpdateSystem)
        {
            this.lateUpdateSystems.addItem(system.handlerClassType, system);
        }
        else if(system instanceof DestroySystem)
        {
            this.destroySystems.addItem(system.handlerClassType, system);
        }
    }


    
    public addComponent(component: IComponent )
    {
        component.engine = <any>this;
        this.allComponents.add(component.__InstanceId, component);

        let type: ClassType = <any> component.constructor;



        if (this.startSystems.ContainsKey(type))
        {
            this.starts.push(component.__InstanceId);
        }

        if (this.updateSystems.ContainsKey(type))
        {
            this.updates.push(component.__InstanceId);
        }

        if (this.lateUpdateSystems.ContainsKey(type))
        {
            this.lateUpdates.push(component.__InstanceId);
        }
    }
    

    public removeComponent(instanceId:int )
    {
        this.allComponents.remove(instanceId);
    }
    
    public  getComponent(instanceId:int ): IComponent
    {
        return this.allComponents.getValue(instanceId);
    }

    
    private Start(): void
    {
        while (this.starts.length > 0)
        {
            let instanceId = this.starts.shift()
            let component = this.allComponents.getValue(instanceId);
            if (!component)
            {
                continue;
            }
            
            let type = component.constructor;

            let iStartSystems: IStartSystem[] = this.startSystems.get(type);
            if (iStartSystems == null)
            {
                continue;
            }
            
            for (let iStartSystem  of iStartSystems)
            {
                try
                {
                    iStartSystem.Run(component, this);
                }
                catch (e)
                {
                    Log.Error(e);
                }
            }
        }
    }

    public Destroy(component: IComponent ): void
    {
        let type = component.constructor;
        let iDestroySystems: IDestroySystem[] = this.destroySystems.get(type);
        if (iDestroySystems == null)
        {
            return;
        }

        for (let iDestroySystem  of iDestroySystems)
        {
            if (iDestroySystem == null)
            {
                continue;
            }

            try
            {
                iDestroySystem.Run(component, this);
            }
            catch (e)
            {
                Log.Error(e);
            }
        }
    }

    
    public etUpdate(): void
    {
        this.Start();
        
        while (this.updates.length > 0)
        {
            let instanceId = this.updates.shift();
            let component:IComponent = this.allComponents.getValue(instanceId);
            if (!component)
            {
                continue;
            }
            if (component.isDisposed)
            {
                continue;
            }

            let type = component.constructor;
            
            let iUpdateSystems = this.updateSystems.get(type);
            if (iUpdateSystems == null)
            {
                continue;
            }

            this.updates2.push(instanceId);

            for (let iUpdateSystem of iUpdateSystems)
            {
                try
                {
                    iUpdateSystem.Run(component, this);
                }
                catch (e)
                {
                    Log.Error(e);
                }
            }
        }

        let tmp = this.updates;
        this.updates = this.updates2;
        this.updates2 = tmp;
    }

    public etLateUpdate():void
    {
        while (this.lateUpdates.length > 0)
        {
            let instanceId = this.lateUpdates.shift();
            let component: IComponent = this.allComponents.getValue(instanceId);
            if (!component)
            {
                continue;
            }
            if (component.isDisposed)
            {
                continue;
            }

            let type = component.constructor;
            let iLateUpdateSystems = this.lateUpdateSystems.get(type);
            if (iLateUpdateSystems == null)
            {
                continue;
            }

            this.lateUpdates2.push(instanceId);

            for (let iLateUpdateSystem of iLateUpdateSystems)
            {
                try
                {
                    iLateUpdateSystem.Run(component, this);
                }
                catch (e)
                {
                    Log.Error(e);
                }
            }
        }
        
        let tmp = this.lateUpdates;
        this.lateUpdates = this.lateUpdates2;
        this.lateUpdates2 = tmp;
    }


    //=======================================
    // 事件
    //---------------------------------------

    /** 注册事件 */
    registerEvent(eventId: string, e: IEvent)
    {
        e.engine = <any> this;
        this.allEvents.addItem(eventId, e);
    }

    public Run(type: string, ...args ): void
    {
        let iEvents = this.allEvents.get(type);

        if (!iEvents)
        {
            return;
        }

        for (let iEvent of iEvents)
        {
            try
            {
                iEvent.Handle(...args);
            }
            catch (e)
            {
                Log.Error(e);
            }
        }
    }


}