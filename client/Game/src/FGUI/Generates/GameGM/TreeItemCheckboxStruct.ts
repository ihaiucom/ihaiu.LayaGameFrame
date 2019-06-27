/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TreeItemCheckbox from "../../Extends/GameGM/TreeItemCheckbox";

export default class TreeItemCheckboxStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://46xcitpdx6hou";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():TreeItemCheckbox {
		return <TreeItemCheckbox><any>(fairygui.UIPackage.createObject("GameGM","TreeItemCheckbox"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}