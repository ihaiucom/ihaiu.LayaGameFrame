/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CostItemIcon from "../../Extends/CommonGame/CostItemIcon";

export default class CostItemIconStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_countState : fairygui.Controller;
	public m_icon : fairygui.GLoader;
	public m_num : fairygui.GTextField;
	public m_itemName : fairygui.GTextField;

	
	public static URL:string = "ui://4snov4n9ma8e2e";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():CostItemIcon {
		return <CostItemIcon><any>(fairygui.UIPackage.createObject("CommonGame","CostItemIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_countState = this.getController("countState");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_num = <fairygui.GTextField><any>(this.getChild("num"));
		this.m_itemName = <fairygui.GTextField><any>(this.getChild("itemName"));
		
		
	}
}