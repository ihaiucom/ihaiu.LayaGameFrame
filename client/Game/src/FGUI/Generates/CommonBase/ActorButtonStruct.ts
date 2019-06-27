/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorButton from "../../Extends/CommonBase/ActorButton";

export default class ActorButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://jaoapdicwprdvu";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ActorButton {
		return <ActorButton><any>(fairygui.UIPackage.createObject("CommonBase","ActorButton"));
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