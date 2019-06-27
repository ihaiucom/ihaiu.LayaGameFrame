/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowButtonSmall from "../../Extends/CommonBase/YellowButtonSmall";

export default class YellowButtonSmallStruct extends fairygui.GButton
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdickzdyv";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():YellowButtonSmall {
		return <YellowButtonSmall><any>(fairygui.UIPackage.createObject("CommonBase","YellowButtonSmall"));
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