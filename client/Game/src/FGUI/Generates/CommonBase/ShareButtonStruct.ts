/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ShareButton from "../../Extends/CommonBase/ShareButton";

export default class ShareButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://jaoapdicla1jw7";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ShareButton {
		return <ShareButton><any>(fairygui.UIPackage.createObject("CommonBase","ShareButton"));
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