/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import LoginPanel from "../../Extends/ModuleLogin/LoginPanel";
import GuestPanel from "../../Extends/ModuleLogin/GuestPanel";
import RegisterPanel from "../../Extends/ModuleLogin/RegisterPanel";
import LoginWindowUI from "../../Extends/ModuleLogin/LoginWindowUI";

export default class LoginWindowUIStruct extends fairygui.GComponent
{
	public m_TabCtrl : fairygui.Controller;
	public m_txt_resVer : fairygui.GTextField;
	public m_txt_gamever : fairygui.GTextField;
	public m_screenBG : ScreenBG;
	public m_loginPanel : LoginPanel;
	public m_guestPanel : GuestPanel;
	public m_registerPanel : RegisterPanel;
	public m_testBtn : fairygui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c0";
	
	public static DependPackages:string[] = ["ModuleLogin","GameLaunch"];

	
	public static createInstance():LoginWindowUI {
		return <LoginWindowUI><any>(fairygui.UIPackage.createObject("ModuleLogin","LoginWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_TabCtrl = this.getController("TabCtrl");

		
		this.m_txt_resVer = <fairygui.GTextField><any>(this.getChild("txt_resVer"));
		this.m_txt_gamever = <fairygui.GTextField><any>(this.getChild("txt_gamever"));
		this.m_screenBG = <ScreenBG><any>(this.getChild("screenBG"));
		this.m_loginPanel = <LoginPanel><any>(this.getChild("loginPanel"));
		this.m_guestPanel = <GuestPanel><any>(this.getChild("guestPanel"));
		this.m_registerPanel = <RegisterPanel><any>(this.getChild("registerPanel"));
		this.m_testBtn = <fairygui.GButton><any>(this.getChild("testBtn"));
		
		
	}
}