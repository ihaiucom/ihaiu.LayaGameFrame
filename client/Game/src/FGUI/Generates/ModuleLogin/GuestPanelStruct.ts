/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GuestPanel from "../../Extends/ModuleLogin/GuestPanel";

export default class GuestPanelStruct extends fairygui.GComponent
{
	public m_g_guestlogin : fairygui.GGroup;
	public m_btn_guestlogin : fairygui.GButton;
	public m_btn_linkaccount : fairygui.GButton;
	public m_btn_back : fairygui.GButton;

	
	public static URL:string = "ui://4698ugpknz0c24";
	
	public static DependPackages:string[] = ["ModuleLogin"];

	
	public static createInstance():GuestPanel {
		return <GuestPanel><any>(fairygui.UIPackage.createObject("ModuleLogin","GuestPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_g_guestlogin = <fairygui.GGroup><any>(this.getChild("g_guestlogin"));
		this.m_btn_guestlogin = <fairygui.GButton><any>(this.getChild("btn_guestlogin"));
		this.m_btn_linkaccount = <fairygui.GButton><any>(this.getChild("btn_linkaccount"));
		this.m_btn_back = <fairygui.GButton><any>(this.getChild("btn_back"));
		
		
	}
}