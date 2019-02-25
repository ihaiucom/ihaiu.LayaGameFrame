/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GlobalModalWaiting from "../../Extends/GameLaunch/GlobalModalWaiting";

export default class GlobalModalWaitingStruct extends fairygui.GComponent
{
	public m_rotation : fairygui.Transition;
	public m_circle : fairygui.GImage;

	
	public static URL:string = "ui://47qsdr42nk8t0";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():GlobalModalWaiting {
		return <GlobalModalWaiting><any>(fairygui.UIPackage.createObject("GameLaunch","GlobalModalWaiting"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_circle = <fairygui.GImage><any>(this.getChild("circle"));
		
		
		this.m_rotation =  this.getTransition("rotation");
	}
}