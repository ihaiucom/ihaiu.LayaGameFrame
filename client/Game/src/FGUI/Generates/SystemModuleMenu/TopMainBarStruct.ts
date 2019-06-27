/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopHeadInfo from "../../Extends/SystemModuleMenu/TopHeadInfo";
import TopStreet from "../../Extends/SystemModuleMenu/TopStreet";
import TopMoneyMainBar from "../../Extends/SystemModuleMenu/TopMoneyMainBar";
import TopMainBar from "../../Extends/SystemModuleMenu/TopMainBar";

export default class TopMainBarStruct extends fairygui.GComponent
{
	public m_headInfo : TopHeadInfo;
	public m_street : TopStreet;
	public m_moneyBar : TopMoneyMainBar;

	
	public static URL:string = "ui://4rsi5gesszhvv";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase"];

	
	public static createInstance():TopMainBar {
		return <TopMainBar><any>(fairygui.UIPackage.createObject("SystemModuleMenu","TopMainBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_headInfo = <TopHeadInfo><any>(this.getChild("headInfo"));
		this.m_street = <TopStreet><any>(this.getChild("street"));
		this.m_moneyBar = <TopMoneyMainBar><any>(this.getChild("moneyBar"));
		
		
	}
}