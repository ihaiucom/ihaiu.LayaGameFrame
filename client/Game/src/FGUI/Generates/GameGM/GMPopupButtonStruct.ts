/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMPopupButton from "../../Extends/GameGM/GMPopupButton";

export default class GMPopupButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://46xcitpdm23g5";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMPopupButton {
		return <GMPopupButton><any>(fairygui.UIPackage.createObject("GameGM","GMPopupButton"));
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