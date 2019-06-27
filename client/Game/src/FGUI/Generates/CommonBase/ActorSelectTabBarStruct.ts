/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorSelectTabBar from "../../Extends/CommonBase/ActorSelectTabBar";

export default class ActorSelectTabBarStruct extends fairygui.GComponent
{
	public m_tab : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdiclcu2vk";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ActorSelectTabBar {
		return <ActorSelectTabBar><any>(fairygui.UIPackage.createObject("CommonBase","ActorSelectTabBar"));
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