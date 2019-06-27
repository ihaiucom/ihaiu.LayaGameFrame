/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagTabBar from "../../Extends/CommonBase/BagTabBar";

export default class BagTabBarStruct extends fairygui.GComponent
{
	public m_select : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdicncg9k";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():BagTabBar {
		return <BagTabBar><any>(fairygui.UIPackage.createObject("CommonBase","BagTabBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_select = this.getController("select");

		
		
		
	}
}