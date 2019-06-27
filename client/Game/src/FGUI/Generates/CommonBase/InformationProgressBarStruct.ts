/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationProgressBar from "../../Extends/CommonBase/InformationProgressBar";

export default class InformationProgressBarStruct extends fairygui.GProgressBar
{
	public m_bar : fairygui.GImage;

	
	public static URL:string = "ui://jaoapdicl44gw8";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():InformationProgressBar {
		return <InformationProgressBar><any>(fairygui.UIPackage.createObject("CommonBase","InformationProgressBar"));
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