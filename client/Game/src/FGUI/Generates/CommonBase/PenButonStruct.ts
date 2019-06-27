/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PenButon from "../../Extends/CommonBase/PenButon";

export default class PenButonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://jaoapdice2wxw5";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():PenButon {
		return <PenButon><any>(fairygui.UIPackage.createObject("CommonBase","PenButon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		
		
	}
}