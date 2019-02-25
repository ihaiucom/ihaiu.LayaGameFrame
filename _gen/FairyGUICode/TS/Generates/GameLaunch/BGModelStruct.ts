/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BGModel from "../../Extends/GameLaunch/BGModel";

export default class BGModelStruct extends fairygui.GComponent
{
	public m_bg : fairygui.GImage;

	
	public static URL:string = "ui://47qsdr42f84so";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():BGModel {
		return <BGModel><any>(fairygui.UIPackage.createObject("GameLaunch","BGModel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fairygui.GImage><any>(this.getChild("bg"));
		
		
	}
}