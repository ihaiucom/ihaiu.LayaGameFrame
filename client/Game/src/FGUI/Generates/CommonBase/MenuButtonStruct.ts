/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuButton from "../../Extends/CommonBase/MenuButton";

export default class MenuButtonStruct extends fairygui.GButton
{
	public m_state : fairygui.Controller;
	public m_icon : fairygui.GLoader;
	public m_lock : fairygui.GImage;

	
	public static URL:string = "ui://jaoapdicma8exc";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():MenuButton {
		return <MenuButton><any>(fairygui.UIPackage.createObject("CommonBase","MenuButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_state = this.getController("state");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_lock = <fairygui.GImage><any>(this.getChild("lock"));
		
		
	}
}