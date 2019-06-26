/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemToastMessage from "../../Extends/GameLaunch/SystemToastMessage";

export default class SystemToastMessageStruct extends fairygui.GComponent
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://47qsdr42nk8t3";
	
	public static DependPackages:string[] = ["GameLaunch","_ResImageUIV1"];

	
	public static createInstance():SystemToastMessage {
		return <SystemToastMessage><any>(fairygui.UIPackage.createObject("GameLaunch","SystemToastMessage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}