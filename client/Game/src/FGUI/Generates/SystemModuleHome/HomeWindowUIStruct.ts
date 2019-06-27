/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBarMain from "../../Extends/SystemModuleMenu/MenuBarMain";
import MenuBarRightBottom from "../../Extends/SystemModuleMenu/MenuBarRightBottom";
import TopMainBar from "../../Extends/SystemModuleMenu/TopMainBar";
import MenuBarRightTop from "../../Extends/SystemModuleMenu/MenuBarRightTop";
import MenuAppointmentButton from "../../Extends/SystemModuleMenu/MenuAppointmentButton";
import HomeWindowUI from "../../Extends/SystemModuleHome/HomeWindowUI";

export default class HomeWindowUIStruct extends fairygui.GComponent
{
	public m_bgBottom : fairygui.GImage;
	public m_bgTop : fairygui.GImage;
	public m_mainMenuBar : MenuBarMain;
	public m_rightBottomMenuBar : MenuBarRightBottom;
	public m_topMainBar : TopMainBar;
	public m_rightTopMenuBar : MenuBarRightTop;
	public m_menuAppointmentButton : MenuAppointmentButton;

	
	public static URL:string = "ui://4sapkhzuntfm0";
	
	public static DependPackages:string[] = ["SystemModuleHome","SystemModuleMenu","CommonBase","_ResImagePic","_ResImageUIV1"];

	
	public static createInstance():HomeWindowUI {
		return <HomeWindowUI><any>(fairygui.UIPackage.createObject("SystemModuleHome","HomeWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bgBottom = <fairygui.GImage><any>(this.getChild("bgBottom"));
		this.m_bgTop = <fairygui.GImage><any>(this.getChild("bgTop"));
		this.m_mainMenuBar = <MenuBarMain><any>(this.getChild("mainMenuBar"));
		this.m_rightBottomMenuBar = <MenuBarRightBottom><any>(this.getChild("rightBottomMenuBar"));
		this.m_topMainBar = <TopMainBar><any>(this.getChild("topMainBar"));
		this.m_rightTopMenuBar = <MenuBarRightTop><any>(this.getChild("rightTopMenuBar"));
		this.m_menuAppointmentButton = <MenuAppointmentButton><any>(this.getChild("menuAppointmentButton"));
		
		
	}
}