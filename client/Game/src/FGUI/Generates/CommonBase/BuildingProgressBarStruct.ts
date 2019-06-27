/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingProgressBar from "../../Extends/CommonBase/BuildingProgressBar";

export default class BuildingProgressBarStruct extends fairygui.GProgressBar
{
	public m_bar : fairygui.GImage;

	
	public static URL:string = "ui://jaoapdicm5zox4";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BuildingProgressBar {
		return <BuildingProgressBar><any>(fairygui.UIPackage.createObject("CommonBase","BuildingProgressBar"));
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