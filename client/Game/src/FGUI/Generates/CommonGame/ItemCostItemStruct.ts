/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemCostItem from "../../Extends/CommonGame/ItemCostItem";

export default class ItemCostItemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_c_show_bg : fairygui.Controller;
	public m_icon : fairygui.GLoader;
	public m_labNum : fairygui.GTextField;

	
	public static URL:string = "ui://4snov4n9qror1d";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():ItemCostItem {
		return <ItemCostItem><any>(fairygui.UIPackage.createObject("CommonGame","ItemCostItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_c_show_bg = this.getController("c_show_bg");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_labNum = <fairygui.GTextField><any>(this.getChild("labNum"));
		
		
	}
}