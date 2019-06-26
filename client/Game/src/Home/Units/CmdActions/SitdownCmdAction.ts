import AbstractCmdAction from "../Cmds/CmdAction";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import IdleCmdConfig from "../CmdConfigs/IdleCmdConfig";
import UnitActionUtils from "../Utils/UnitActionUtil";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import SitdownCmdConfig from "../CmdConfigs/SitdownCmdConfig";
import TransformData from "../Components/TransformData";
import UnitData from "../Components/UnitData";
import CmdReflex from "../Cmds/CmdReflex";
import { TalkType } from "../ExtEnums/TalkType";
import Random from "../../../Libs/Helpers/Random";
import { UnitType } from "../ExtEnums/UnitType";

/** 坐凳子 */
export class SitdownCmdAction extends AbstractCmdAction
{
    static __CmdType: UnitCmdType = UnitCmdType.Sitdown;
    cmdConfig: SitdownCmdConfig;
    
    release()
    {
        super.release();
        this.cmdConfig = null;
    }

    get seatNode()
    {
        return this.engine.path.getRouteNode(this.cmdConfig.seatId);
    }

    get seatPreNode()
    {
        return this.engine.path.getDecorationLastRouteNode(this.cmdConfig.seatId);
    }


    /** 进入 */
    onEnterBegin()
    {
        let unit = this.entity.getComponent(UnitData);
        let decorationOccupyUnitId = this.engine.getDecorationOccupy(this.cmdConfig.seatId)
        if(decorationOccupyUnitId > 0 && decorationOccupyUnitId != unit.unitId)
        {
            UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.idle);
            this.onEndEnd();
            let cmdCls;
            cmdCls = CmdReflex.getCmdClsss(UnitCmdType.BubbleTalk);
            cmdCls.generate(this.engine, this.entity, this.cmdData, UnitCmdType.BubbleTalk, TalkType.Text, "有人坐了我的座位");

            if(!this.cmdConfig.isForce)
            {
                return;
            }
            else
            {
                this.engine.unitCmdUtil.idle(UnitType.Actor, decorationOccupyUnitId);
            }
        }

        
        let transform = this.entity.getComponent(TransformData);
        transform.position.x = this.seatNode.x;
        transform.position.y = this.seatNode.y;
        
        UnitActionUtils.setOrientation(this.engine, this.entity, this.seatNode.orientationType);
        UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.down);
        this.engine.setDecorationOccupy(this.cmdConfig.seatId, unit.unitId);
       
        super.onEnterBegin();
    }

    onEnterEnd()
    {
        UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.sitAnimation);
        
        if(Random.range(0, 10) > 5)
        {
            let cmdCls;
            cmdCls = CmdReflex.getCmdClsss(UnitCmdType.BubbleTalk);
            cmdCls.generate(this.engine, this.entity, this.cmdData, UnitCmdType.BubbleTalk, TalkType.None);
        }
        super.onEnterEnd();
    }

    /** 结束 */
    onEndBegin()
    {
        UnitActionUtils.playAction(this.engine, this.entity, ActorActionId.up);
        super.onEndBegin();
    }

    onEndEnd()
    {
        let unit = this.entity.getComponent(UnitData);
        this.engine.setDecorationOccupyEmpty(this.cmdConfig.seatId, unit.unitId);

        if(this.seatPreNode)
        {
            let transform = this.entity.getComponent(TransformData);
            transform.position.x = this.seatPreNode.x;
            transform.position.y = this.seatPreNode.y;
        }
        
        if(Random.range(0, 10) > 5)
        {
            let cmdCls;
            cmdCls = CmdReflex.getCmdClsss(UnitCmdType.BubbleTalk);
            cmdCls.generate(this.engine, this.entity, this.cmdData, UnitCmdType.BubbleTalk, TalkType.None);
        }
        super.onEndEnd();
    }

    

}