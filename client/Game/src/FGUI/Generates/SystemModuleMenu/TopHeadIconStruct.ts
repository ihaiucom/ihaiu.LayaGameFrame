/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopHeadIconMask from "../../Extends/SystemModuleMenu/TopHeadIconMask";
import TopHeadIcon from "../../Extends/SystemModuleMenu/TopHeadIcon";

export default class TopHeadIconStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : TopHeadIconMask;

	
	public static URL:string = "ui://4rsi5gesszhvy";
	
	public static DependPackages:string[] = ["SystemModuleMenu","_ResImageUI"];

	
	public static createInstance():TopHeadIcon {
		return <TopHeadIcon><any>(fairygui.UIPackage.createObject("SystemModuleMenu","TopHeadIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <TopHeadIconMask><any>(this.getChild("icon"));
		
		
	}
}