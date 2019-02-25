/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PurpleButton from "../../Extends/GameLaunch/PurpleButton";

export default class PurpleButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://47qsdr42f84sn";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():PurpleButton {
		return <PurpleButton><any>(fairygui.UIPackage.createObject("GameLaunch","PurpleButton"));
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