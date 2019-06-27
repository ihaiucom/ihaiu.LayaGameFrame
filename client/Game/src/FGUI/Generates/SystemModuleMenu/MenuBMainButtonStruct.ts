/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import MenuBMainButton from "../../Extends/SystemModuleMenu/MenuBMainButton";

export default class MenuBMainButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_c_visible_new : fairygui.Controller;
	public m_t0 : fairygui.Transition;
	public m_icon : fairygui.GLoader;
	public m_lock : fairygui.GImage;
	public m_new : fairygui.GImage;
	public m_butterflyFx : fairygui.GMovieClip;
	public m_red : NumberBadge;

	
	public static URL:string = "ui://4rsi5gesszhv3";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUIV1","_ResImageUI"];

	
	public static createInstance():MenuBMainButton {
		return <MenuBMainButton><any>(fairygui.UIPackage.createObject("SystemModuleMenu","MenuBMainButton"));
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
		this.m_butterflyFx = <fairygui.GMovieClip><any>(this.getChild("butterflyFx"));
		this.m_red = <NumberBadge><any>(this.getChild("red"));
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}