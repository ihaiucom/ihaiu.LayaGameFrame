/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import MenuRButton from "../../Extends/SystemModuleMenu/MenuRButton";

export default class MenuRButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_c_visible_new : fairygui.Controller;
	public m_icon : fairygui.GLoader;
	public m_lock : fairygui.GImage;
	public m_new : fairygui.GImage;
	public m_red : NumberBadge;

	
	public static URL:string = "ui://4rsi5gesszhvt";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUI"];

	
	public static createInstance():MenuRButton {
		return <MenuRButton><any>(fairygui.UIPackage.createObject("SystemModuleMenu","MenuRButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");
		this.m_c_visible_new = this.getController("c_visible_new");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_lock = <fairygui.GImage><any>(this.getChild("lock"));
		this.m_new = <fairygui.GImage><any>(this.getChild("new"));
		this.m_red = <NumberBadge><any>(this.getChild("red"));
		
		
	}
}