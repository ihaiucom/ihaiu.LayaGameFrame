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

/** 根据寻路移动 */
export default class MovePathCmdConfig extends AbstractCmdConfig
{
    /** 命令类型 */
    static __CmdType: UnitCmdType = UnitCmdType.MovePath;
    
    /** 命令队列类型 */
    static __CmdQueueType: UnitCmdQueueType = UnitCmdQueueType.Transform;

    
    
    /** 生成命令配置 */
    static generate(engine: HomeWorld, entity: Entity, cmdData: UnitCmdData, cmdType: UnitCmdType, targetRouteNodeId?:int, isRun?: boolean, isEndIdle?: boolean): AbstractCmdConfig
    {
        
        (targetRouteNodeId===void 0)&& (targetRouteNodeId=-1);
        (isRun===void 0)&& (isRun=Random.range(0, 10) >= 6);
        (isEndIdle===void 0)&& (isEndIdle=true);

        
        let cmdConfig = CmdReflex.poolGetCmd(cmdType);
        cmdConfig.init(engine, entity, targetRouteNodeId, isRun);
        cmdData.add(cmdConfig);


        if(isEndIdle)
        {
            let cmdCls = CmdReflex.getCmdClsss(UnitCmdType.Idle);
            cmdCls.generate(engine, entity, cmdData, UnitCmdType.Idle);
        }
        return cmdConfig;
    }


    isRun: boolean = false;
    paths:RouteNode[];
    
    /** 初始化命令配置 */
    init(engine: HomeWorld, entity: Entity, targetRouteNodeId?:int, isRun?: boolean)
    {
        this.completeType = UnitCmdCompleteType.WaitEnd;
        this.isRun = isRun;

        let isRandom = targetRouteNodeId <= 0;
        let movePath = entity.getComponent(MovePathData);
        if(isRandom)
            this.paths = engine.scene.path.randomPaths(movePath.routeNodeId);
        else
            this.paths = engine.scene.path.getPaths(movePath.routeNodeId, targetRouteNodeId);

    }

    
     /** 释放 */
     release()
     {
         super.release();
         this.isRun = false;
         this.paths = null;
     }


}