/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBGStruct from "../../Generates/GameLaunch/ScreenBGStruct";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";

export default class ScreenBG extends ScreenBGStruct
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
        FguiHelper.autoScreenSize(this, Laya.Stage.ALIGN_CENTER, Laya.Stage.ALIGN_MIDDLE);
    }
}