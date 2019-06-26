import AbstractCmdAction from "../Cmds/CmdAction";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import IdleCmdConfig from "../CmdConfigs/IdleCmdConfig";
import UnitActionUtils from "../Utils/UnitActionUtil";
import ActorActionId from "../../../Config/Keys/ActorActionId";

/** 待机 */
export class IdleCmdAction extends AbstractCmdAction
{
    static __CmdType: UnitCmdType = UnitCmdType.Idle;
    cmdConfig: IdleCmdConfig;

    /** 进入 */
    onEnterBegin()
    {
        UnitActionUtils.playAction(this.engine, this.entity, this.cmdConfig.actionId);
        super.onEnterBegin();
    }
}