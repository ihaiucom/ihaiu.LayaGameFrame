import { AbstractCmdConfig } from "../Cmds/CmdConfigs";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import { UnitCmdCompleteType } from "../ExtEnums/UnitCmdCompleteType";
import Random from "../../../Libs/Helpers/Random";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import Game from "../../../Game";

/** 锁定等待 */
export default class LockWaitCmdConfig extends AbstractCmdConfig
{
    /** 命令类型 */
    static __CmdType: UnitCmdType = UnitCmdType.LockWait;
    
    /** 命令队列类型 */
    static __CmdQueueType: UnitCmdQueueType = UnitCmdQueueType.Transform;
    
    /** 初始化命令配置 */
    init(engine: HomeWorld, entity: Entity)
    {
        this.completeType = UnitCmdCompleteType.WaitEnd;
    }
}