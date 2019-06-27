/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopHeadIconMask from "../../Extends/SystemModuleMenu/TopHeadIconMask";

export default class TopHeadIconMaskStruct extends fairygui.GButton
{
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://4rsi5gesszhv10";
	
	public static DependPackages:string[] = ["SystemModuleMenu"];

	
	public static createInstance():TopHeadIconMask {
		return <TopHeadIconMask><any>(fairygui.UIPackage.createObject("SystemModuleMenu","TopHeadIconMask"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		
		
	}
}