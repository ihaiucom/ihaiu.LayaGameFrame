/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationScrollBar_grip from "../../Extends/CommonBase/InformationScrollBar_grip";
import InformationScrollBar from "../../Extends/CommonBase/InformationScrollBar";

export default class InformationScrollBarStruct extends fairygui.GScrollBar
{
	public m_bar : fairygui.GGraph;
	public m_grip : InformationScrollBar_grip;

	
	public static URL:string = "ui://jaoapdicmaamxj";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():InformationScrollBar {
		return <InformationScrollBar><any>(fairygui.UIPackage.createObject("CommonBase","InformationScrollBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GGraph><any>(this.getChild("bar"));
		this.m_grip = <InformationScrollBar_grip><any>(this.getChild("grip"));
		
		
	}
}