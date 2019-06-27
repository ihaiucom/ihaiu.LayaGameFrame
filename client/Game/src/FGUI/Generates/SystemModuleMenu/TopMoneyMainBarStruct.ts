/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TopMoneyItem from "../../Extends/SystemModuleMenu/TopMoneyItem";
import TopMoneyMainBar from "../../Extends/SystemModuleMenu/TopMoneyMainBar";

export default class TopMoneyMainBarStruct extends fairygui.GComponent
{
	public m_artistPhysical : TopMoneyItem;
	public m_gold : TopMoneyItem;
	public m_diamond : TopMoneyItem;

	
	public static URL:string = "ui://4rsi5gesszhv1d";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUIV1"];

	
	public static createInstance():TopMoneyMainBar {
		return <TopMoneyMainBar><any>(fairygui.UIPackage.createObject("SystemModuleMenu","TopMoneyMainBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_artistPhysical = <TopMoneyItem><any>(this.getChild("artistPhysical"));
		this.m_gold = <TopMoneyItem><any>(this.getChild("gold"));
		this.m_diamond = <TopMoneyItem><any>(this.getChild("diamond"));
		
		
	}
}