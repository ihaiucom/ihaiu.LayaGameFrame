/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioShareBgStruct from "../../Generates/ModuleStudio/StudioShareBgStruct";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";

export default class StudioShareBg extends StudioShareBgStruct
{
    onWindowShow()
    {
        this.setScreenSize();
        Laya.stage.on(laya.events.Event.RESIZE, this, this.setScreenSize);
    }

    onWindowHide()
    {
        Laya.stage.off(laya.events.Event.RESIZE, this, this.setScreenSize);
    }

    setScreenSize()
    {
        FguiHelper.autoScreenScale(this, Laya.Stage.ALIGN_CENTER, Laya.Stage.ALIGN_MIDDLE);
    }
}