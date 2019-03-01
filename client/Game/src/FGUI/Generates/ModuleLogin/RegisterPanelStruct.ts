/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountInput from "../../Extends/ModuleLogin/AccountInput";
import PasswordInput from "../../Extends/ModuleLogin/PasswordInput";
import RegisterPanel from "../../Extends/ModuleLogin/RegisterPanel";

export default class RegisterPanelStruct extends fairygui.GComponent
{
	public m_c1 : fairygui.Controller;
	public m_accountInput : AccountInput;
	public m_passwordInput : PasswordInput;
	public m_btn_onRegister : fairygui.GButton;
	public m_lb_agreement : fairygui.GObject;
	public m_btn_registerback : fairygui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c1z";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():RegisterPanel {
		return <RegisterPanel><any>(fairygui.UIPackage.createObject("ModuleLogin","RegisterPanel"));
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
		this.m_btn_onRegister = <fairygui.GButton><any>(this.getChild("btn_onRegister"));
		this.m_lb_agreement = <fairygui.GObject><any>(this.getChild("lb_agreement"));
		this.m_btn_registerback = <fairygui.GButton><any>(this.getChild("btn_registerback"));
		
		
	}
}