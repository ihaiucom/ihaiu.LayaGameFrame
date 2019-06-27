/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import IconButton from "../../Extends/CommonBase/IconButton";

export default class IconButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdict5vjvc";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():IconButton {
		return <IconButton><any>(fairygui.UIPackage.createObject("CommonBase","IconButton"));
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
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}