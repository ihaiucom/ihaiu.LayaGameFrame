/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMSubMenuRadioBar from "../../Extends/GameGM/GMSubMenuRadioBar";

export default class GMSubMenuRadioBarStruct extends fairygui.GComponent
{
	public m_menuBar : fairygui.GGraph;
	public m_subMenu : fairygui.GList;

	
	public static URL:string = "ui://46xcitpdket7l";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMSubMenuRadioBar {
		return <GMSubMenuRadioBar><any>(fairygui.UIPackage.createObject("GameGM","GMSubMenuRadioBar"));
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