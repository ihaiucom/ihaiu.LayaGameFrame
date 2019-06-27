/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import Yellow2Button from "../../Extends/CommonBase/Yellow2Button";

export default class Yellow2ButtonStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_title : fairygui.GTextField;
	public m_icon : fairygui.GLoader;
	public m_number : fairygui.GTextField;
	public m_badge : NumberBadge;

	
	public static URL:string = "ui://jaoapdice5hk1j";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():Yellow2Button {
		return <Yellow2Button><any>(fairygui.UIPackage.createObject("CommonBase","Yellow2Button"));
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
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_number = <fairygui.GTextField><any>(this.getChild("number"));
		this.m_badge = <NumberBadge><any>(this.getChild("badge"));
		
		
	}
}