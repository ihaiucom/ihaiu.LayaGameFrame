/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShadowMask from "../../Extends/CommonBase/ShadowMask";

export default class ShadowMaskStruct extends fairygui.GComponent
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdich9411n";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ShadowMask {
		return <ShadowMask><any>(fairygui.UIPackage.createObject("CommonBase","ShadowMask"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}