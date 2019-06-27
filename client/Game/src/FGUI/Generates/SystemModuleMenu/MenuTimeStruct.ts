/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTime from "../../Extends/SystemModuleMenu/MenuTime";

export default class MenuTimeStruct extends fairygui.GLabel
{
	public m_time : fairygui.GTextField;

	
	public static URL:string = "ui://4rsi5gesszhvl";
	
	public static DependPackages:string[] = ["SystemModuleMenu","_ResImageUI"];

	
	public static createInstance():MenuTime {
		return <MenuTime><any>(fairygui.UIPackage.createObject("SystemModuleMenu","MenuTime"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_time = <fairygui.GTextField><any>(this.getChild("time"));
		
		
	}
}