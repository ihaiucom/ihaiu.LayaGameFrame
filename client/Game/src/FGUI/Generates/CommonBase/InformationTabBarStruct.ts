/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationTabBar from "../../Extends/CommonBase/InformationTabBar";

export default class InformationTabBarStruct extends fairygui.GComponent
{
	public m_tab : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdicl44gw9";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():InformationTabBar {
		return <InformationTabBar><any>(fairygui.UIPackage.createObject("CommonBase","InformationTabBar"));
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