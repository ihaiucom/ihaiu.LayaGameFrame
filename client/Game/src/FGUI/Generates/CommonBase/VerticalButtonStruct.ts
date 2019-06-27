/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import VerticalButton from "../../Extends/CommonBase/VerticalButton";

export default class VerticalButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicf65hvv";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():VerticalButton {
		return <VerticalButton><any>(fairygui.UIPackage.createObject("CommonBase","VerticalButton"));
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