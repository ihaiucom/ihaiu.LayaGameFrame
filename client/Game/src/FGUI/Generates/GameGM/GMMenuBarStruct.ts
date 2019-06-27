/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMMenuBar from "../../Extends/GameGM/GMMenuBar";

export default class GMMenuBarStruct extends fairygui.GComponent
{
	public m_menuBar : fairygui.GGraph;
	public m_menuList : fairygui.GList;

	
	public static URL:string = "ui://46xcitpdwl2t1";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMMenuBar {
		return <GMMenuBar><any>(fairygui.UIPackage.createObject("GameGM","GMMenuBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_menuBar = <fairygui.GGraph><any>(this.getChild("menuBar"));
		this.m_menuList = <fairygui.GList><any>(this.getChild("menuList"));
		
		
	}
}