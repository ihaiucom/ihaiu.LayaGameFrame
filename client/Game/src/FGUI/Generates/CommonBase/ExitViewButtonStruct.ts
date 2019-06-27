/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ExitViewButton from "../../Extends/CommonBase/ExitViewButton";

export default class ExitViewButtonStruct extends fairygui.GButton
{

	
	public static URL:string = "ui://jaoapdicn6y7w8";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():ExitViewButton {
		return <ExitViewButton><any>(fairygui.UIPackage.createObject("CommonBase","ExitViewButton"));
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