/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopHeadInfo from "../../Extends/SystemModuleMenu/TopHeadInfo";

export default class TopHeadInfoStruct extends fairygui.GButton
{
	public m_icon : fairygui.GLoader;
	public m_level : fairygui.GTextField;
	public m_expBar : fairygui.GProgressBar;

	
	public static URL:string = "ui://4rsi5gesszhvx";
	
	public static DependPackages:string[] = ["SystemModuleMenu","_ResImageUIV1"];

	
	public static createInstance():TopHeadInfo {
		return <TopHeadInfo><any>(fairygui.UIPackage.createObject("SystemModuleMenu","TopHeadInfo"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_level = <fairygui.GTextField><any>(this.getChild("level"));
		this.m_expBar = <fairygui.GProgressBar><any>(this.getChild("expBar"));
		
		
	}
}