/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TextArea from "../../Extends/GameGM/TextArea";

export default class TextAreaStruct extends fairygui.GButton
{
	public m_title : fairygui.GTextInput;

	
	public static URL:string = "ui://46xcitpdket7m";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():TextArea {
		return <TextArea><any>(fairygui.UIPackage.createObject("GameGM","TextArea"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
		
		
	}
}