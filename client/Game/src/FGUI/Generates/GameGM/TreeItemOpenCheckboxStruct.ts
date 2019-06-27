/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TreeItemOpenCheckbox from "../../Extends/GameGM/TreeItemOpenCheckbox";

export default class TreeItemOpenCheckboxStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_close : fairygui.GTextField;
	public m_open : fairygui.GTextField;

	
	public static URL:string = "ui://46xcitpdx6how";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():TreeItemOpenCheckbox {
		return <TreeItemOpenCheckbox><any>(fairygui.UIPackage.createObject("GameGM","TreeItemOpenCheckbox"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_close = <fairygui.GTextField><any>(this.getChild("close"));
		this.m_open = <fairygui.GTextField><any>(this.getChild("open"));
		
		
	}
}