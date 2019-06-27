/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import SmallTabButton from "../../Extends/CommonBase/SmallTabButton";

export default class SmallTabButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;
	public m_badge : NumberBadge;

	
	public static URL:string = "ui://jaoapdici3pqvq";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():SmallTabButton {
		return <SmallTabButton><any>(fairygui.UIPackage.createObject("CommonBase","SmallTabButton"));
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
		this.m_badge = <NumberBadge><any>(this.getChild("badge"));
		
		
	}
}