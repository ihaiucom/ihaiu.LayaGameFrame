/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AccountInput from "../../Extends/ModuleLogin/AccountInput";

export default class AccountInputStruct extends fairygui.GComponent
{
	public m_txt_account : fairygui.GTextInput;
	public m_accountComboBox : fairygui.GComboBox;
	public m_button : fairygui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c1h";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():AccountInput {
		return <AccountInput><any>(fairygui.UIPackage.createObject("ModuleLogin","AccountInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_txt_account = <fairygui.GTextInput><any>(this.getChild("txt_account"));
		this.m_accountComboBox = <fairygui.GComboBox><any>(this.getChild("accountComboBox"));
		this.m_button = <fairygui.GButton><any>(this.getChild("button"));
		
		
	}
}