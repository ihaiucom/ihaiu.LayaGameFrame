/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LoginWindowUIStruct from "../../Generates/ModuleLogin/LoginWindowUIStruct";
import Res from "../../../Config/Keys/Res";
import R from "../../../Config/Keys/R";
import Game from "../../../Game";
import LoginWindow from "../../../GameModule/ViewWindows/LoginWindow";
import ChartPolygonPropertyView from "../CommonBase/ChartPolygonPropertyView";
import FguiHelper from '../../../Libs/Helpers/FguiHelper';

export default class LoginWindowUI extends LoginWindowUIStruct
{
    // 窗口
    moduleWindow: LoginWindow;

	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_screenBG.m_icon.url = Res.getSpritePathHasExt(R.sprite.Launch_launch);
        window["aa"] = this;
        this.test();
    }



    
    // 如果定义了该方法，主窗口显示时将被调
    onWindowShow()
    {
        this.m_txt_gamever.text = "GameVersion:" + Game.version.localAppVersionData.toString();
        this.m_txt_resVer.text = "ResVersion:" + Game.version.localResVersionData.toString();
    }


    // 如果定义了该方法,主窗口关闭时将被调
    onWindowHide()
    {

    }

    test()
    {
        this.m_testBtn.onClick(this, this.onClickTestButton);
        // this.m_testBtn.visible = true;
    }
    
    onClickTestButton()
    {
       
        
    }
}