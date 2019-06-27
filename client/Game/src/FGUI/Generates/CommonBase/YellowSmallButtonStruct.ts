/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowSmallButton from "../../Extends/CommonBase/YellowSmallButton";

export default class YellowSmallButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicj3nbv1";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():YellowSmallButton {
		return <YellowSmallButton><any>(fairygui.UIPackage.createObject("CommonBase","YellowSmallButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}