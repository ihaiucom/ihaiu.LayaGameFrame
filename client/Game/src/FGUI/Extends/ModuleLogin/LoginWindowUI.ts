/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LoginWindowUIStruct from "../../Generates/ModuleLogin/LoginWindowUIStruct";
import Res from "../../../Config/Keys/Res";
import R from "../../../Config/Keys/R";

export default class LoginWindowUI extends LoginWindowUIStruct
{
	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_screenBG.m_icon.url = Res.getSpritePathHasExt(R.sprite.Launch_launch);
    }
}