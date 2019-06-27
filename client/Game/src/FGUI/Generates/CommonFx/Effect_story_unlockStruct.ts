/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Effect_story_unlock from "../../Extends/CommonFx/Effect_story_unlock";

export default class Effect_story_unlockStruct extends fairygui.GComponent
{
	public m_t0 : fairygui.Transition;
	public m_bg : fairygui.GImage;

	
	public static URL:string = "ui://4ykhynlre5hk0";
	
	public static DependPackages:string[] = ["CommonFx","_ResImageUI"];

	
	public static createInstance():Effect_story_unlock {
		return <Effect_story_unlock><any>(fairygui.UIPackage.createObject("CommonFx","Effect_story_unlock"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bg = <fairygui.GImage><any>(this.getChild("bg"));
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}