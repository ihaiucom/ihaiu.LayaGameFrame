/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StarflyAnimation from "../../Extends/CommonFx/StarflyAnimation";

export default class StarflyAnimationStruct extends fairygui.GComponent
{
	public m_t1 : fairygui.Transition;

	
	public static URL:string = "ui://4ykhynlrg2r5m";
	
	public static DependPackages:string[] = ["CommonFx","_ResImageUI"];

	
	public static createInstance():StarflyAnimation {
		return <StarflyAnimation><any>(fairygui.UIPackage.createObject("CommonFx","starflyAnimation"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_t1 =  this.getTransition("t1");
	}
}