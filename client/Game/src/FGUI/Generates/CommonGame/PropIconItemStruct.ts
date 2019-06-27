/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PropIconItem from "../../Extends/CommonGame/PropIconItem";

export default class PropIconItemStruct extends fairygui.GLabel
{
	public m_prop : fairygui.Controller;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://4snov4n9g2f52d";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():PropIconItem {
		return <PropIconItem><any>(fairygui.UIPackage.createObject("CommonGame","PropIconItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_prop = this.getController("prop");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		
		
	}
}