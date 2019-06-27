/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartProgressBar from "../../Extends/CommonBase/ChartProgressBar";

export default class ChartProgressBarStruct extends fairygui.GProgressBar
{
	public m_bar_v : fairygui.GImage;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicvjljx7";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():ChartProgressBar {
		return <ChartProgressBar><any>(fairygui.UIPackage.createObject("CommonBase","ChartProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar_v = <fairygui.GImage><any>(this.getChild("bar_v"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}