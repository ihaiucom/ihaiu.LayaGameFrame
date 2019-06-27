/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMSubMenuBar from "../../Extends/GameGM/GMSubMenuBar";

export default class GMSubMenuBarStruct extends fairygui.GComponent
{
	public m_menuBar : fairygui.GGraph;
	public m_subMenu : fairygui.GList;

	
	public static URL:string = "ui://46xcitpdfbyi6";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMSubMenuBar {
		return <GMSubMenuBar><any>(fairygui.UIPackage.createObject("GameGM","GMSubMenuBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_menuBar = <fairygui.GGraph><any>(this.getChild("menuBar"));
		this.m_subMenu = <fairygui.GList><any>(this.getChild("subMenu"));
		
		
	}
}