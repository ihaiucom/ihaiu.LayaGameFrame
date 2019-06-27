/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseProgressBar from "../../Extends/CommonBase/BaseProgressBar";

export default class BaseProgressBarStruct extends fairygui.GProgressBar
{
	public m_bar : fairygui.GImage;
	public m_title : fairygui.GTextField;
	public m_level : fairygui.GTextField;
	public m_bar1 : fairygui.GImage;
	public m_bar2 : fairygui.GImage;
	public m_level2 : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicncg9o";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BaseProgressBar {
		return <BaseProgressBar><any>(fairygui.UIPackage.createObject("CommonBase","BaseProgressBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_level = <fairygui.GTextField><any>(this.getChild("level"));
		this.m_bar1 = <fairygui.GImage><any>(this.getChild("bar1"));
		this.m_bar2 = <fairygui.GImage><any>(this.getChild("bar2"));
		this.m_level2 = <fairygui.GTextField><any>(this.getChild("level2"));
		
		
	}
}