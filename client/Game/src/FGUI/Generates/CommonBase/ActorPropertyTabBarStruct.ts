/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorPropertyTabBar from "../../Extends/CommonBase/ActorPropertyTabBar";

export default class ActorPropertyTabBarStruct extends fairygui.GComponent
{
	public m_tab : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdicf65hvw";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ActorPropertyTabBar {
		return <ActorPropertyTabBar><any>(fairygui.UIPackage.createObject("CommonBase","ActorPropertyTabBar"));
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