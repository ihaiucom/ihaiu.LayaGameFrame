/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioAnimatedButton from "../../Extends/CommonBase/StudioAnimatedButton";

export default class StudioAnimatedButtonStruct extends fairygui.GButton
{
	public m_isPlay : fairygui.Controller;
	public m_t0 : fairygui.Transition;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://jaoapdicdt43x8";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():StudioAnimatedButton {
		return <StudioAnimatedButton><any>(fairygui.UIPackage.createObject("CommonBase","StudioAnimatedButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_isPlay = this.getController("isPlay");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}