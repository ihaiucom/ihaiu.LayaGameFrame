/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowButton from "../../Extends/CommonBase/YellowButton";

export default class YellowButtonStruct extends fairygui.GButton
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdico3xj0";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():YellowButton {
		return <YellowButton><any>(fairygui.UIPackage.createObject("CommonBase","YellowButton"));
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