/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AddButton from "../../Extends/CommonBase/AddButton";
import TopMoneyItem from "../../Extends/SystemModuleMenu/TopMoneyItem";

export default class TopMoneyItemStruct extends fairygui.GLabel
{
	public m_title : fairygui.GTextField;
	public m_icon : fairygui.GLoader;
	public m_addButton : AddButton;

	
	public static URL:string = "ui://4rsi5gesszhv1e";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase"];

	
	public static createInstance():TopMoneyItem {
		return <TopMoneyItem><any>(fairygui.UIPackage.createObject("SystemModuleMenu","TopMoneyItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_addButton = <AddButton><any>(this.getChild("addButton"));
		
		
	}
}