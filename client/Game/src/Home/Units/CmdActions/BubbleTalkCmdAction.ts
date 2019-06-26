import AbstractCmdAction from "../Cmds/CmdAction";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import TransformData from "../Components/TransformData";
import UnitData from "../Components/UnitData";
import BubbleTalkCmdConfig from "../CmdConfigs/BubbleTalkCmdConfig";

/** 气泡说话 */
export class BubbleTalkCmdAction extends AbstractCmdAction
{
    static __CmdType: UnitCmdType = UnitCmdType.BubbleTalk;
    cmdConfig: BubbleTalkCmdConfig;

    /** 进入 */
    onEnterBegin()
    {
        // console.log("BubbleTalkCmdAction onEnterBegin",this.cmdConfig.text);
        let unit = this.entity.getComponent(UnitData);
        let transform = this.entity.getComponent(TransformData);
        this.engine.bubbleTalkViewManager.show(unit, transform, this.cmdConfig.text);
        super.onEnterBegin();
    }

    /** 结束 */
    onEndEnd()
    {
        // console.log("BubbleTalkCmdAction onEndEnd",this.cmdConfig.text);
        let unit = this.entity.getComponent(UnitData);
        this.engine.bubbleTalkViewManager.hide(unit);
        super.onEndEnd();
    }

}