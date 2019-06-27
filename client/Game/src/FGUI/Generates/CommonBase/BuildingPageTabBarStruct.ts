/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingPageTabBar from "../../Extends/CommonBase/BuildingPageTabBar";

export default class BuildingPageTabBarStruct extends fairygui.GComponent
{
	public m_tab : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdicq74ivk";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():BuildingPageTabBar {
		return <BuildingPageTabBar><any>(fairygui.UIPackage.createObject("CommonBase","BuildingPageTabBar"));
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