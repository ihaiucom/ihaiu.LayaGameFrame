/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMPopupMenu_item from "../../Extends/GameGM/GMPopupMenu_item";

export default class GMPopupMenu_itemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_checked : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://46xcitpdm23g3";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMPopupMenu_item {
		return <GMPopupMenu_item><any>(fairygui.UIPackage.createObject("GameGM","GMPopupMenu_item"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_checked = this.getController("checked");

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}