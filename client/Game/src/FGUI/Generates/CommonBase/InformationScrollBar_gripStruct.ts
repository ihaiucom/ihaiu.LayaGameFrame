/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationScrollBar_grip from "../../Extends/CommonBase/InformationScrollBar_grip";

export default class InformationScrollBar_gripStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://jaoapdicmaamxi";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():InformationScrollBar_grip {
		return <InformationScrollBar_grip><any>(fairygui.UIPackage.createObject("CommonBase","InformationScrollBar_grip"));
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