/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryListTabBar from "../../Extends/CommonBase/StoryListTabBar";

export default class StoryListTabBarStruct extends fairygui.GComponent
{
	public m_tab : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdicol35vx";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():StoryListTabBar {
		return <StoryListTabBar><any>(fairygui.UIPackage.createObject("CommonBase","StoryListTabBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_tab = this.getController("tab");

		
		
		
	}
}