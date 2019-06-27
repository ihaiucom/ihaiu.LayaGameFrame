/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BlueButtonSmall from "../../Extends/CommonBase/BlueButtonSmall";

export default class BlueButtonSmallStruct extends fairygui.GButton
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdickzdyt";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BlueButtonSmall {
		return <BlueButtonSmall><any>(fairygui.UIPackage.createObject("CommonBase","BlueButtonSmall"));
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