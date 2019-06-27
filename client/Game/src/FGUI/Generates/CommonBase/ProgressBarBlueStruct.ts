/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ProgressBarBlue from "../../Extends/CommonBase/ProgressBarBlue";

export default class ProgressBarBlueStruct extends fairygui.GProgressBar
{
	public m_bar : fairygui.GImage;
	public m_light : fairygui.GImage;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicnnuxv9";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():ProgressBarBlue {
		return <ProgressBarBlue><any>(fairygui.UIPackage.createObject("CommonBase","ProgressBarBlue"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		this.m_light = <fairygui.GImage><any>(this.getChild("light"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}