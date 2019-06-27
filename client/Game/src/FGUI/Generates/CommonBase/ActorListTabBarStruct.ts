/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorListTabBar from "../../Extends/CommonBase/ActorListTabBar";

export default class ActorListTabBarStruct extends fairygui.GComponent
{
	public m_tab : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdici3pqvr";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ActorListTabBar {
		return <ActorListTabBar><any>(fairygui.UIPackage.createObject("CommonBase","ActorListTabBar"));
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