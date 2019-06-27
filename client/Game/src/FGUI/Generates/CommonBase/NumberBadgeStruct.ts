/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";

export default class NumberBadgeStruct extends fairygui.GLabel
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicncg9j";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():NumberBadge {
		return <NumberBadge><any>(fairygui.UIPackage.createObject("CommonBase","NumberBadge"));
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