import { AbstractCmdConfig } from "../Cmds/CmdConfigs";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import { UnitCmdCompleteType } from "../ExtEnums/UnitCmdCompleteType";
import Random from "../../../Libs/Helpers/Random";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import Game from "../../../Game";
import { DecorationType } from "../ExtEnums/DecorationType";

/** 坐凳子 */
export default class SitdownCmdConfig extends AbstractCmdConfig
{
    /** 命令类型 */
    static __CmdType: UnitCmdType = UnitCmdType.Sitdown;
    
    /** 命令队列类型 */
    static __CmdQueueType: UnitCmdQueueType = UnitCmdQueueType.Transform;

    /** 座位节点ID */
    seatId:int;
    /** 是否强制 */
    isForce: boolean = false;
    
    /** 初始化命令配置 */
    init(engine: HomeWorld, entity: Entity, seatId:int = -1, isForce:boolean = false, completeType: UnitCmdCompleteType = UnitCmdCompleteType.Time, duration: number = -1)
    {
        if(duration == -1)
            duration = Random.range(5000, 10000);

        if(seatId == -1)
            seatId = engine.scene.path.randomDecorationId(DecorationType.Seat);

        this.seatId = seatId;
        this.isForce = isForce;
        this.completeType = completeType;
        this.completeDuration = duration;

        let actorConfig;
        actorConfig = Game.config.actorAction.getConfig(ActorActionId.down);
        this.enterCompleteDuration = actorConfig.duration;
        this.enterCompleteType = UnitCmdCompleteType.Time;

        
        actorConfig = Game.config.actorAction.getConfig(ActorActionId.up);
        this.endCompleteDuration = actorConfig.duration;
        this.endCompleteType = UnitCmdCompleteType.Time;
    }

}