/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Star from "../../Extends/CommonGame/Star";
import ItemIconItem from "../../Extends/CommonGame/ItemIconItem";

export default class ItemIconItemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_type : fairygui.Controller;
	public m_icon : fairygui.GLoader;
	public m_title : fairygui.GTextField;
	public m_Star : Star;

	
	public static URL:string = "ui://4snov4n9ncg93";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():ItemIconItem {
		return <ItemIconItem><any>(fairygui.UIPackage.createObject("CommonGame","ItemIconItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_type = this.getController("type");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_Star = <Star><any>(this.getChild("Star"));
		
		
	}
}