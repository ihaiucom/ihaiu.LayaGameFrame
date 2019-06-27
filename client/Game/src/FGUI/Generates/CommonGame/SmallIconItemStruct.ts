/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Star from "../../Extends/CommonGame/Star";
import SmallIconItem from "../../Extends/CommonGame/SmallIconItem";

export default class SmallIconItemStruct extends fairygui.GButton
{
	public m_c_show_bg : fairygui.Controller;
	public m_icon : fairygui.GLoader;
	public m_title : fairygui.GTextField;
	public m_star : Star;

	
	public static URL:string = "ui://4snov4n9e5hkf";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():SmallIconItem {
		return <SmallIconItem><any>(fairygui.UIPackage.createObject("CommonGame","SmallIconItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_c_show_bg = this.getController("c_show_bg");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_star = <Star><any>(this.getChild("star"));
		
		
	}
}