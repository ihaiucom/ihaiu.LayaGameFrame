import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import { AbstractCmdConfig } from "../Cmds/CmdConfigs";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import { UnitCmdCompleteType } from "../ExtEnums/UnitCmdCompleteType";
import UnitCmdData from "../Components/UnitCmdData";
import CmdReflex from "../Cmds/CmdReflex";
import { RouteNode } from "../../../Libs/PathFinding/PathFindingData";
import MovePathData from "../Components/MovePathData";
import Random from "../../../Libs/Helpers/Random";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import { DecorationType } from "../ExtEnums/DecorationType";

/** 前往座位 */
export default class GroupGotoSitdownCmdConfig extends AbstractCmdConfig
{
    /** 命令类型 */
    static __CmdType: UnitCmdType = UnitCmdType.Group_GotoSitdown;
    
    /** 命令队列类型 */
    static __CmdQueueType: UnitCmdQueueType = UnitCmdQueueType.Transform;

    
    
    /** 生成命令配置 */
    static generate(engine: HomeWorld, entity: Entity, cmdData: UnitCmdData, cmdType: UnitCmdType, targetSeatNodeId?:int, isRun?: boolean, isForce: boolean = false): AbstractCmdConfig
    {
        
        (targetSeatNodeId===void 0)&& (targetSeatNodeId=-1);
        (isRun===void 0)&& (isRun=Random.range(0, 10) >= 6);

        
        if(targetSeatNodeId == -1)
        {
            targetSeatNodeId = engine.scene.path.randomDecorationId(DecorationType.Seat, false);
        }

        if(targetSeatNodeId == -1)
            return null;

        let node = engine.scene.path.getRouteNode(targetSeatNodeId);

        let targetRouteNodeId = engine.scene.path.getDecorationLastRouteNodeId(targetSeatNodeId);
        let isEndIdle = false;

        let cmdCls;
        cmdCls = CmdReflex.getCmdClsss(UnitCmdType.MovePath);
        cmdCls.generate(engine, entity, cmdData, UnitCmdType.MovePath, targetRouteNodeId, isRun, isEndIdle);

        // 坐下动作
        // cmdCls = CmdReflex.getCmdClsss(UnitCmdType.Action);
        // cmdCls.generate(engine, entity, cmdData, UnitCmdType.Action, node.orientationType, ActorActionId.down);

        // 坐
        // cmdCls = CmdReflex.getCmdClsss(UnitCmdType.Action);
        // cmdCls.generate(engine, entity, cmdData, UnitCmdType.Action, node.orientationType, ActorActionId.down);

        cmdCls = CmdReflex.getCmdClsss(UnitCmdType.Sitdown);
        cmdCls.generate(engine, entity, cmdData, UnitCmdType.Sitdown,  targetSeatNodeId, isForce);
        return null;
    }


    
    /** 初始化命令配置 */
    init(engine: HomeWorld, entity: Entity)
    {
        

    }


}