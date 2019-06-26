import AbstractCmdAction from "../Cmds/CmdAction";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import MovePathCmdConfig from "../CmdConfigs/MovePathCmdConfig";
import UnitActionUtils from "../Utils/UnitActionUtil";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import MovePathData from "../Components/MovePathData";
import TransformData from "../Components/TransformData";
import { RouteNode } from "../../../Libs/PathFinding/PathFindingData";

/** 根据寻路移动 */
export class MovePathCmdAction extends AbstractCmdAction
{
    static __CmdType: UnitCmdType = UnitCmdType.MovePath;
    cmdConfig: MovePathCmdConfig;

    transform: TransformData;
    movePath: MovePathData;

    
    release()
    {
        super.release();
        this.pathNodeIndex = 0;
        this.pathNodeCount = 0;
        this.transform = null;
        this.movePath = null;
        this.cmdConfig = null;
    }

    get paths():RouteNode[]
    {
        return this.cmdConfig.paths;
    }

    get moveSpeed(): number
    {
        return this.cmdConfig.isRun ? this.movePath.runSpeed : this.movePath.walkSpeed;
    }

    get routeNodeId():int
    {
        return this.movePath.routeNodeId;
    }

    set routeNodeId(val:int)
    {
        this.movePath.routeNodeId = val;
    }

    pathNodeIndex = 0;
    pathNodeCount = 0;

    /** 进入 */
    onEnterBegin()
    {
        this.transform = this.entity.getComponent(TransformData);
        this.movePath = this.entity.getComponent(MovePathData);
        this.pathNodeIndex = 0;
        if(!this.paths || this.paths.length == 0)
        {
            this.end();
            return;
        }
        this.pathNodeCount = this.paths.length;

        if(this.cmdConfig.isRun)
            UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.run);
        else
            UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.walk);

        super.onEnterBegin();
        
        this.moveToNode(this.pathNodeIndex);
    }

    
    /** 刷新阶段 */
    onTick(delta: number)
    {

    }

    
    moveToNode(index: number)
    {
        let node = this.paths[index];
        this.routeNodeId = node.id;
        let distance = node.getDistance(this.transform.position.x, this.transform.position.y);
        UnitActionUtils.setOrientationTarget(this.engine, this.entity, node.x, node.y);
        
        if(this.cmdConfig.isRun)
            UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.run);
        else
            UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.walk);

        let speed= this.moveSpeed * 0.01;
        
        Laya.Tween.to(this.transform.position, {x: node.x, y: node.y}, distance / speed, null, Laya.Handler.create(this, this.moveToNodeEnd), 0, true);
    }
    
    moveToNodeEnd()
    {
        this.pathNodeIndex ++;
        if(this.pathNodeIndex < this.pathNodeCount)
        {
            this.moveToNode(this.pathNodeIndex);
        }
        else
        {
            this.end();
        }
    }

    
    onEndEnd()
    {
        if(this.transform)
            Laya.Tween.clearTween(this.transform.position);
        super.onEndEnd();
    }
}