/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TextScroll from "../../Extends/SystemModuleDialog/TextScroll";

export default class TextScrollStruct extends fairygui.GLabel
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://q5yddivtxa7on";
	
	public static DependPackages:string[] = ["SystemModuleDialog"];

	
	public static createInstance():TextScroll {
		return <TextScroll><any>(fairygui.UIPackage.createObject("SystemModuleDialog","TextScroll"));
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