/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuTime from "../../Extends/SystemModuleMenu/MenuTime";
import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import MenuTimeButton from "../../Extends/SystemModuleMenu/MenuTimeButton";

export default class MenuTimeButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_visiableTitle : fairygui.Controller;
	public m_c_visible_new : fairygui.Controller;
	public m_icon : fairygui.GLoader;
	public m_title : fairygui.GTextField;
	public m_lock : fairygui.GImage;
	public m_new : fairygui.GImage;
	public m_buttonTime : MenuTime;
	public m_red : NumberBadge;

	
	public static URL:string = "ui://4rsi5gesszhvj";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUI"];

	
	public static createInstance():MenuTimeButton {
		return <MenuTimeButton><any>(fairygui.UIPackage.createObject("SystemModuleMenu","MenuTimeButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_visiableTitle = this.getController("visiableTitle");
		this.m_c_visible_new = this.getController("c_visible_new");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_lock = <fairygui.GImage><any>(this.getChild("lock"));
		this.m_new = <fairygui.GImage><any>(this.getChild("new"));
		this.m_buttonTime = <MenuTime><any>(this.getChild("buttonTime"));
		this.m_red = <NumberBadge><any>(this.getChild("red"));
		
		
	}
}