/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DialogWindow from "../../Extends/GameLaunch/DialogWindow";

export default class DialogWindowStruct extends fairygui.GComponent
{

	
	public static URL:string = "ui://47qsdr42f84sh";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():DialogWindow {
		return <DialogWindow><any>(fairygui.UIPackage.createObject("GameLaunch","DialogWindow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
	}
}