/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AddButton2 from "../../Extends/CommonBase/AddButton2";

export default class AddButton2Struct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdicl44gwb";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():AddButton2 {
		return <AddButton2><any>(fairygui.UIPackage.createObject("CommonBase","AddButton2"));
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