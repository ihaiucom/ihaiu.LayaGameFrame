/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TitleBar from "../../Extends/CommonGame/TitleBar";

export default class TitleBarStruct extends fairygui.GLabel
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://4snov4n9kchl2e";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUIV1"];

	
	public static createInstance():TitleBar {
		return <TitleBar><any>(fairygui.UIPackage.createObject("CommonGame","TitleBar"));
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