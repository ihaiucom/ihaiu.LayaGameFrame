/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuRButton from "../../Extends/SystemModuleMenu/MenuRButton";
import MenuBarRightTop from "../../Extends/SystemModuleMenu/MenuBarRightTop";

export default class MenuBarRightTopStruct extends fairygui.GComponent
{
	public m_mail : MenuRButton;

	
	public static URL:string = "ui://4rsi5geskrdk1h";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase"];

	
	public static createInstance():MenuBarRightTop {
		return <MenuBarRightTop><any>(fairygui.UIPackage.createObject("SystemModuleMenu","MenuBarRightTop"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_mail = <MenuRButton><any>(this.getChild("mail"));
		
		
	}
}