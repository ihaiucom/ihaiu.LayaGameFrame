/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BubbleTalkSmall from "../../Extends/CommonBase/BubbleTalkSmall";

export default class BubbleTalkSmallStruct extends fairygui.GLabel
{
	public m_bg : fairygui.GImage;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicp9erw6";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BubbleTalkSmall {
		return <BubbleTalkSmall><any>(fairygui.UIPackage.createObject("CommonBase","BubbleTalkSmall"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fairygui.GImage><any>(this.getChild("bg"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}