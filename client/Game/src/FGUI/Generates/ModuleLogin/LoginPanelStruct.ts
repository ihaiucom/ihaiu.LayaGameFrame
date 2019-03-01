/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountInput from "../../Extends/ModuleLogin/AccountInput";
import PasswordInput from "../../Extends/ModuleLogin/PasswordInput";
import LoginPanel from "../../Extends/ModuleLogin/LoginPanel";

export default class LoginPanelStruct extends fairygui.GComponent
{
	public m_c1 : fairygui.Controller;
	public m_accountInput : AccountInput;
	public m_passwordInput : PasswordInput;
	public m_btn_forgot : fairygui.GButton;
	public m_btn_security : fairygui.GButton;
	public m_btn_login : fairygui.GButton;
	public m_btn_register : fairygui.GButton;
	public m_btn_guest : fairygui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c1g";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():LoginPanel {
		return <LoginPanel><any>(fairygui.UIPackage.createObject("ModuleLogin","LoginPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_c1 = this.getController("c1");

		
		this.m_accountInput = <AccountInput><any>(this.getChild("accountInput"));
		this.m_passwordInput = <PasswordInput><any>(this.getChild("passwordInput"));
		this.m_btn_forgot = <fairygui.GButton><any>(this.getChild("btn_forgot"));
		this.m_btn_security = <fairygui.GButton><any>(this.getChild("btn_security"));
		this.m_btn_login = <fairygui.GButton><any>(this.getChild("btn_login"));
		this.m_btn_register = <fairygui.GButton><any>(this.getChild("btn_register"));
		this.m_btn_guest = <fairygui.GButton><any>(this.getChild("btn_guest"));
		
		
	}
}