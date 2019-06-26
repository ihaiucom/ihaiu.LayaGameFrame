import { AbstractCmdConfig } from "../Cmds/CmdConfigs";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import { UnitCmdCompleteType } from "../ExtEnums/UnitCmdCompleteType";
import Random from "../../../Libs/Helpers/Random";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import Game from "../../../Game";

/** 待机 */
export default class IdleCmdConfig extends AbstractCmdConfig
{
    /** 命令类型 */
    static __CmdType: UnitCmdType = UnitCmdType.Idle;
    
    /** 命令队列类型 */
    static __CmdQueueType: UnitCmdQueueType = UnitCmdQueueType.Transform;

    actionId: int = ActorActionId.idle; 
    
    /** 初始化命令配置 */
    init(engine: HomeWorld, entity: Entity)
    {
        this.completeType = UnitCmdCompleteType.Time;
        this.actionId = Random.range(1, 10) > 5 ? ActorActionId.idleAnimation : ActorActionId.idle;
        if(this.actionId == ActorActionId.idleAnimation)
        {
            let config = Game.config.actorAction.getConfig(this.actionId);
            this.completeDuration = config.duration;
        }
        else
        {
            this.completeDuration = Random.range(1000, 6000);
        }
    }
}