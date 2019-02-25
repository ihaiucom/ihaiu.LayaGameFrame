/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/GameLaunch/CloseButton";
import DialogCloseWindow from "../../Extends/GameLaunch/DialogCloseWindow";

export default class DialogCloseWindowStruct extends fairygui.GComponent
{
	public m_closeButton : CloseButton;

	
	public static URL:string = "ui://47qsdr42f84sg";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():DialogCloseWindow {
		return <DialogCloseWindow><any>(fairygui.UIPackage.createObject("GameLaunch","DialogCloseWindow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_closeButton = <CloseButton><any>(this.getChild("closeButton"));
		
		
	}
}