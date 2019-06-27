/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMButton from "../../Extends/GameLaunch/GMButton";

export default class GMButtonStruct extends fairygui.GButton
{

	
	public static URL:string = "ui://47qsdr42uohx13";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():GMButton {
		return <GMButton><any>(fairygui.UIPackage.createObject("GameLaunch","GMButton"));
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