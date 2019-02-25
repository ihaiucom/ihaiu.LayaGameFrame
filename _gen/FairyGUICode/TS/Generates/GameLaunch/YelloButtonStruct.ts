/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YelloButton from "../../Extends/GameLaunch/YelloButton";

export default class YelloButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://47qsdr42f84sm";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():YelloButton {
		return <YelloButton><any>(fairygui.UIPackage.createObject("GameLaunch","YelloButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}