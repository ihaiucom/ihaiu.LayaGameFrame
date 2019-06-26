import AbstractCmdAction from "../Cmds/CmdAction";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import LockWaitCmdConfig from "../CmdConfigs/LockWaitCmdConfig";

/** 锁定等待 */
export class LockWaitCmdAction extends AbstractCmdAction
{
    cmdConfig: LockWaitCmdConfig;
    static __CmdType: UnitCmdType = UnitCmdType.LockWait;

    /** 进入 */
    onEnterBegin()
    {
        super.onEnterBegin();
    }
}