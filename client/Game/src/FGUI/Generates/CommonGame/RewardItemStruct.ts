/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RewardItem from "../../Extends/CommonGame/RewardItem";

export default class RewardItemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_t0 : fairygui.Transition;
	public m_icon : fairygui.GLoader;
	public m_num : fairygui.GTextField;
	public m_itemName : fairygui.GTextField;

	
	public static URL:string = "ui://4snov4n9u6m71a";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():RewardItem {
		return <RewardItem><any>(fairygui.UIPackage.createObject("CommonGame","RewardItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_num = <fairygui.GTextField><any>(this.getChild("num"));
		this.m_itemName = <fairygui.GTextField><any>(this.getChild("itemName"));
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}