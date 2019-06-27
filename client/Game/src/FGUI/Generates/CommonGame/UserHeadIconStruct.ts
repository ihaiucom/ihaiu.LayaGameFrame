/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import UserHeadIcon from "../../Extends/CommonGame/UserHeadIcon";

export default class UserHeadIconStruct extends fairygui.GComponent
{
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://4snov4n9u6m719";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():UserHeadIcon {
		return <UserHeadIcon><any>(fairygui.UIPackage.createObject("CommonGame","UserHeadIcon"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		
		
	}
}