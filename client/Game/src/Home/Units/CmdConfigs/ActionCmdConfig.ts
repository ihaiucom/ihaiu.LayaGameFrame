import { AbstractCmdConfig } from "../Cmds/CmdConfigs";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import { UnitCmdCompleteType } from "../ExtEnums/UnitCmdCompleteType";
import Random from "../../../Libs/Helpers/Random";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import Game from "../../../Game";
import { UnitOrientationType } from "../ExtEnums/UnitOrientationType";

/** 播放动作 */
export default class ActionCmdConfig extends AbstractCmdConfig
{
    /** 命令类型 */
    static __CmdType: UnitCmdType = UnitCmdType.Action;
    
    /** 命令队列类型 */
    static __CmdQueueType: UnitCmdQueueType = UnitCmdQueueType.Transform;

    // 动作
    actionId: int = ActorActionId.idle; 
    // 朝向
    orientationType: UnitOrientationType = UnitOrientationType.None;
    
    /** 初始化命令配置 */
    init(engine: HomeWorld, entity: Entity,orientationType = UnitOrientationType.None, actionId?:int, duration?:number)
    {
        
        (actionId===void 0 || actionId <= 0)&& (actionId=Random.range(1, 10) > 5 ? ActorActionId.idleAnimation : ActorActionId.idle);
        (duration===void 0)&& (duration=-1);

        this.completeType = UnitCmdCompleteType.Time;
        this.actionId = actionId;
        this.orientationType = orientationType;
        
        if(duration <= 0)
        {
            let config = Game.config.actorAction.getConfig(this.actionId);

            if(!config.isLoop)
            {
                duration = config.duration;
            }
            else
            {
                duration = Random.range(1000, 6000);
            }
        }
        this.completeDuration = duration;
        
    }
}