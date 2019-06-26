import { AssemblyNamespace } from "../../../Libs/AssemblyNamespace";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import { UnitCmdState } from "../ExtEnums/UnitCmdState";
import { UnitCmdCompleteType } from "../ExtEnums/UnitCmdCompleteType";
import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import UnitCmdData from "../Components/UnitCmdData";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import { AbstractCmdConfig } from "./CmdConfigs";

/** 命令行为 */
export default abstract class AbstractCmdAction
{
    /** 命令空间 */
    static readonly __namespace = AssemblyNamespace.UnitCmdActions;
    
    /** 命令类型 */
    static __CmdType: UnitCmdType;

    /** 命令类型 */
    get cmdType(): UnitCmdType
    {
        return (<any>(this.constructor)).__CmdType;
    }
    
    /** 命令配置 */
    abstract cmdConfig: AbstractCmdConfig;

    
    /** 命令队列类型 */
    get cmdQueueType(): UnitCmdQueueType
    {
        return this.cmdConfig.cmdQueueType;
    }

    
    release()
    {
        this.engine = null;
        this.entity = null;
        this.cmdData = null;
        this.isForce = false;
    }


    
    /** 丢回对象池 */
    public poolRecover()
    {
        this.release();
        Laya.Pool.recoverByClass(this);
    }

    /** 执行状态 */
    get state(): UnitCmdState
    {
        return this.cmdConfig.state;
    }

    set state(val: UnitCmdState)
    {
        this.cmdConfig.state = val;
    }

     engine: HomeWorld;
     entity: Entity;
     cmdData: UnitCmdData;

    /** 初始化化 */
    init(engine: HomeWorld, entity: Entity, cmdData: UnitCmdData, cmdConfig: AbstractCmdConfig)
    {
        this.engine = engine;
        this.entity = entity;
        this.cmdData = cmdData;
        this.cmdConfig = cmdConfig;
    }

    /** 执行 */
    exe(delta: number)
    {
        switch(this.state)
        {
            case UnitCmdState.None:
                switch(this.cmdConfig.enterCompleteType)
                {
                    case UnitCmdCompleteType.Immediately:
                        this.onEnterBegin();
                        this.onEnterEnd();
                        break;
                    default:
                        this.onEnterBegin();
                        break;
                }
                break;
            case UnitCmdState.EnterTick:
                this.onEnterTick(delta);
                break;
            case UnitCmdState.EnterWillEnd:
                this.onEnterEnd();
                break;

            case UnitCmdState.Tick:
                this.onTick(delta);
                break;

            case UnitCmdState.WillEnd:
                this.end();
                break;
            case UnitCmdState.EndTick:
                this.onEndTick(delta);
                break;
            case UnitCmdState.EndWillEnd:
                this.onEndEnd();
                break;
        }
    }




    /** 进入阶段 */
    onEnterBegin()
    {
        this.state = UnitCmdState.EnterTick;
    }
    
    onEnterTick(delta: number)
    {
        switch(this.cmdConfig.enterCompleteType)
        {
            case UnitCmdCompleteType.NextFrame:
                this.state = UnitCmdState.EnterWillEnd;
                break;

            case UnitCmdCompleteType.Time:
                this.cmdConfig.enterCompleteTime += delta;
                if(this.cmdConfig.enterCompleteTime >= this.cmdConfig.enterCompleteDuration)
                {
                    this.state = UnitCmdState.EnterWillEnd;
                }
                break;
        }
    }
    

    onEnterEnd()
    {
        this.state = UnitCmdState.Tick;
    }


    /** 刷新阶段 */
    onTick(delta: number)
    {
        switch(this.cmdConfig.completeType)
        {
            case UnitCmdCompleteType.NextFrame:
                this.state = UnitCmdState.WillEnd;
                break;

            case UnitCmdCompleteType.Time:
                this.cmdConfig.completeTime += delta;
                if(this.cmdConfig.completeTime >= this.cmdConfig.completeDuration)
                {
                    this.state = UnitCmdState.WillEnd;
                }
                break;
        }
    }
    
    /** 是否强制退出 */
    isForce = false;
    /** 结束 */
    end(isForce = false)
    {
        this.isForce = isForce;

        if(isForce)
        {
            this.onEndEnd();
            return;
        }

        switch(this.cmdConfig.endCompleteType)
        {
            case UnitCmdCompleteType.Immediately:
                this.onEndBegin();
                this.onEndEnd();
                break;
            default:
                this.onEndBegin();
                break;
        }
    }

    /** 结束阶段 */
    onEndBegin()
    {
        this.state = UnitCmdState.EndTick;
    }

    onEndTick(delta: number)
    {
        switch(this.cmdConfig.endCompleteType)
        {
            case UnitCmdCompleteType.NextFrame:
                this.state = UnitCmdState.EndWillEnd;
                break;

            case UnitCmdCompleteType.Time:
                this.cmdConfig.endCompleteTime += delta;
                if(this.cmdConfig.endCompleteTime >= this.cmdConfig.endCompleteDuration)
                {
                    this.state = UnitCmdState.EndWillEnd;
                }
                break;
        }
    }

    onEndEnd()
    {
        this.state = UnitCmdState.Ended;
    }

}

