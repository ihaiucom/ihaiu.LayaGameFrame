/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonBadge from "../../Extends/CommonBase/CommonBadge";

export default class CommonBadgeStruct extends fairygui.GComponent
{

	
	public static URL:string = "ui://jaoapdicncg9i";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():CommonBadge {
		return <CommonBadge><any>(fairygui.UIPackage.createObject("CommonBase","CommonBadge"));
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