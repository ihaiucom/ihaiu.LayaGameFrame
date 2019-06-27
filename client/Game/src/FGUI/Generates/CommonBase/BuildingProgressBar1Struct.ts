/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingProgressBar1 from "../../Extends/CommonBase/BuildingProgressBar1";

export default class BuildingProgressBar1Struct extends fairygui.GProgressBar
{
	public m_Fill : fairygui.Controller;
	public m_bar : fairygui.GImage;

	
	public static URL:string = "ui://jaoapdict8drwe";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():BuildingProgressBar1 {
		return <BuildingProgressBar1><any>(fairygui.UIPackage.createObject("CommonBase","BuildingProgressBar1"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_Fill = this.getController("Fill");

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		
		
	}
}