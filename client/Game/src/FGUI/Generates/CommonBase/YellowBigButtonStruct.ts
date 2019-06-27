/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import YellowBigButton from "../../Extends/CommonBase/YellowBigButton";

export default class YellowBigButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicj3nbu";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():YellowBigButton {
		return <YellowBigButton><any>(fairygui.UIPackage.createObject("CommonBase","YellowBigButton"));
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