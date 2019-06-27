/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RewardNumItem from "../../Extends/CommonGame/RewardNumItem";

export default class RewardNumItemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_t0 : fairygui.Transition;
	public m_icon : fairygui.GLoader;
	public m_num : fairygui.GTextField;

	
	public static URL:string = "ui://4snov4n9pf6a2f";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():RewardNumItem {
		return <RewardNumItem><any>(fairygui.UIPackage.createObject("CommonGame","RewardNumItem"));
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
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}