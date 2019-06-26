import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import { AssemblyNamespace } from "../../../Libs/AssemblyNamespace";
import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import UnitCmdData from "../Components/UnitCmdData";
import CmdReflex from "./CmdReflex";
import { UnitCmdCompleteType } from "../ExtEnums/UnitCmdCompleteType";
import Random from "../../../Libs/Helpers/Random";
import { UnitCmdState } from "../ExtEnums/UnitCmdState";

/** 抽象命令配置 */
export abstract class AbstractCmdConfig
{
    /** 命令空间 */
    static readonly __namespace = AssemblyNamespace.UnitCmds;

    /** 命令类型 */
    static __CmdType: UnitCmdType;
    
    /** 命令队列类型 */
    static __CmdQueueType: UnitCmdQueueType;

    /** 命令类型 */
    get cmdType(): UnitCmdType
    {
        return (<any>(this.constructor)).__CmdType;
    }

    /** 命令队列类型 */
    get cmdQueueType(): UnitCmdQueueType
    {
        return (<any>(this.constructor)).__CmdQueueType;
    }

    /** 生成命令配置 */
    static generate(engine: HomeWorld, entity: Entity, cmdData: UnitCmdData, cmdType: UnitCmdType, ...args): AbstractCmdConfig
    {
        let cmdConfig = CmdReflex.poolGetCmd(cmdType);
        cmdConfig.init(engine, entity, ...args);
        cmdData.add(cmdConfig);
        return cmdConfig;
    }

    enterCompleteType: UnitCmdCompleteType = UnitCmdCompleteType.Immediately;
    enterCompleteDuration: number = 0;
    enterCompleteTime: number = 0;

    
    endCompleteType: UnitCmdCompleteType = UnitCmdCompleteType.Immediately;
    endCompleteDuration: number = 0;
    endCompleteTime: number = 0;

    /** 完成方式 */
    completeType: UnitCmdCompleteType;
    /** 完成方式为Time,  持续时间 */
    completeDuration: number = 10;
    /** 完成方式为Time,  已经持续的时间 */
    completeTime: number = 0;
    /** 执行状态 */
    state = UnitCmdState.None;


    /** 初始化命令配置 */
    abstract init(engine: HomeWorld, entity: Entity, ...args);

    /** 释放 */
    release()
    {
        this.completeType = UnitCmdCompleteType.Immediately;
        this.completeDuration = 0;
        this.completeTime = 0;
        this.state = UnitCmdState.None;

        this.enterCompleteType = UnitCmdCompleteType.Immediately;
        this.enterCompleteDuration = 0;
        this.enterCompleteTime = 0;

        this.endCompleteType = UnitCmdCompleteType.Immediately;
        this.endCompleteDuration = 0;
        this.endCompleteTime = 0;
    }
    
    /** 丢回对象池 */
    public poolRecover()
    {
        this.release();
        Laya.Pool.recoverByClass(this);
    }
}
