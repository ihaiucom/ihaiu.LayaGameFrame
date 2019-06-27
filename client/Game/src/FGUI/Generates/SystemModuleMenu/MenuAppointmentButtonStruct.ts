/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import MenuAppointmentButton from "../../Extends/SystemModuleMenu/MenuAppointmentButton";

export default class MenuAppointmentButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_c_visible_new : fairygui.Controller;
	public m_fx : fairygui.GMovieClip;
	public m_lock : fairygui.GImage;
	public m_new : fairygui.GImage;
	public m_red : NumberBadge;

	
	public static URL:string = "ui://4rsi5gesl2911i";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUI"];

	
	public static createInstance():MenuAppointmentButton {
		return <MenuAppointmentButton><any>(fairygui.UIPackage.createObject("SystemModuleMenu","MenuAppointmentButton"));
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

		
		this.m_fx = <fairygui.GMovieClip><any>(this.getChild("fx"));
		this.m_lock = <fairygui.GImage><any>(this.getChild("lock"));
		this.m_new = <fairygui.GImage><any>(this.getChild("new"));
		this.m_red = <NumberBadge><any>(this.getChild("red"));
		
		
	}
}