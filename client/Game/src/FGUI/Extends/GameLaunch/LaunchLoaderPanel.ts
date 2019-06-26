/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LaunchLoaderPanelStruct from "../../Generates/GameLaunch/LaunchLoaderPanelStruct";
import Res from "../../../Config/Keys/Res";
import R from "../../../Config/Keys/R";

export default class LaunchLoaderPanel extends LaunchLoaderPanelStruct
{
    
	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_screenBG.m_icon.url = Res.getSpritePathHasExt(R.sprite.Launch_launch);
        this.m_screenBG.setScreenSize();
    }
}