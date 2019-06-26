import AbstractCmdAction from "../Cmds/CmdAction";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import UnitActionUtils from "../Utils/UnitActionUtil";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import ActionCmdConfig from "../CmdConfigs/ActionCmdConfig";
import { UnitOrientationType } from "../ExtEnums/UnitOrientationType";

/** 播放动作 */
export class ActionCmdAction extends AbstractCmdAction
{
    static __CmdType: UnitCmdType = UnitCmdType.Action;
    cmdConfig: ActionCmdConfig;

    /** 进入 */
    onEnterBegin()
    {
        if(this.cmdConfig.orientationType != UnitOrientationType.None)
            UnitActionUtils.setOrientation(this.engine, this.entity, this.cmdConfig.orientationType);

        UnitActionUtils.playAction(this.engine, this.entity, this.cmdConfig.actionId);
        super.onEnterBegin();
    }
}