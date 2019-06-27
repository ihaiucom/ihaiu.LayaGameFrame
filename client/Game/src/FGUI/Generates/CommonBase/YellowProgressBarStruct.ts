/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowProgressBar from "../../Extends/CommonBase/YellowProgressBar";

export default class YellowProgressBarStruct extends fairygui.GProgressBar
{
	public m_bar : fairygui.GImage;

	
	public static URL:string = "ui://jaoapdicszhv12";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():YellowProgressBar {
		return <YellowProgressBar><any>(fairygui.UIPackage.createObject("CommonBase","YellowProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		
		
	}
}