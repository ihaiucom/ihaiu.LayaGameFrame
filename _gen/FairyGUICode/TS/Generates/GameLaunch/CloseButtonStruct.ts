/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/GameLaunch/CloseButton";

export default class CloseButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_closeBtn : fairygui.GImage;

	
	public static URL:string = "ui://47qsdr42f84sj";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():CloseButton {
		return <CloseButton><any>(fairygui.UIPackage.createObject("GameLaunch","CloseButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_closeBtn = <fairygui.GImage><any>(this.getChild("closeBtn"));
		
		
	}
}