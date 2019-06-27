/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioNextButton from "../../Extends/CommonBase/StudioNextButton";

export default class StudioNextButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://jaoapdicoh5ivv";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():StudioNextButton {
		return <StudioNextButton><any>(fairygui.UIPackage.createObject("CommonBase","StudioNextButton"));
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
		
		
	}
}