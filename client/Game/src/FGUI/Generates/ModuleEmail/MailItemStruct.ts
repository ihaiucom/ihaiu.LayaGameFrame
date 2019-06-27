/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemNumItem from "../../Extends/CommonGame/ItemNumItem";
import MailItem from "../../Extends/ModuleEmail/MailItem";

export default class MailItemStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_read : fairygui.Controller;
	public m_title : fairygui.GTextField;
	public m_time : fairygui.GTextField;
	public m_reward : ItemNumItem;

	
	public static URL:string = "ui://41exsi4sj3nb3";
	
	public static DependPackages:string[] = ["ModuleEmail","CommonGame","_ResImageUI"];

	
	public static createInstance():MailItem {
		return <MailItem><any>(fairygui.UIPackage.createObject("ModuleEmail","MailItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_read = this.getController("read");

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_time = <fairygui.GTextField><any>(this.getChild("time"));
		this.m_reward = <ItemNumItem><any>(this.getChild("reward"));
		
		
	}
}