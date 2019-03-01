/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PasswordInput from "../../Extends/ModuleLogin/PasswordInput";

export default class PasswordInputStruct extends fairygui.GComponent
{
	public m_txt_password : fairygui.GTextInput;
	public m_btn_pwdeye : fairygui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c1n";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():PasswordInput {
		return <PasswordInput><any>(fairygui.UIPackage.createObject("ModuleLogin","passwordInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_txt_password = <fairygui.GTextInput><any>(this.getChild("txt_password"));
		this.m_btn_pwdeye = <fairygui.GButton><any>(this.getChild("btn_pwdeye"));
		
		
	}
}