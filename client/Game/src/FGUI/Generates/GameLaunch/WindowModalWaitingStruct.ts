/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import WindowModalWaiting from "../../Extends/GameLaunch/WindowModalWaiting";

export default class WindowModalWaitingStruct extends fairygui.GComponent
{
	public m_rotation : fairygui.Transition;
	public m_circle : fairygui.GImage;

	
	public static URL:string = "ui://47qsdr42f84sp";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():WindowModalWaiting {
		return <WindowModalWaiting><any>(fairygui.UIPackage.createObject("GameLaunch","WindowModalWaiting"));
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