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

/** 拖拽命令 */
export default class DragCmdConfig extends AbstractCmdConfig
{
    /** 命令类型 */
    static __CmdType: UnitCmdType = UnitCmdType.Drag;
    
    /** 命令队列类型 */
    static __CmdQueueType: UnitCmdQueueType = UnitCmdQueueType.Transform;
    
    /** 初始化命令配置 */
    init(engine: HomeWorld, entity: Entity, seatId:int = -1, completeType: UnitCmdCompleteType = UnitCmdCompleteType.Time, duration: number = -1)
    {
        this.completeType = UnitCmdCompleteType.WaitEnd;
        this.enterCompleteType = UnitCmdCompleteType.Time;
        this.enterCompleteDuration = 100;
        this.endCompleteType = UnitCmdCompleteType.Time;
        this.endCompleteDuration = 555;
    }
}