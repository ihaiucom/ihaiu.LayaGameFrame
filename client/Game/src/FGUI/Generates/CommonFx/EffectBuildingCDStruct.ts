/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EffectBuildingCD from "../../Extends/CommonFx/EffectBuildingCD";

export default class EffectBuildingCDStruct extends fairygui.GComponent
{
	public m_t000 : fairygui.Transition;

	
	public static URL:string = "ui://4ykhynlrh96rm";
	
	public static DependPackages:string[] = ["CommonFx"];

	
	public static createInstance():EffectBuildingCD {
		return <EffectBuildingCD><any>(fairygui.UIPackage.createObject("CommonFx","EffectBuildingCD"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
		this.m_t000 =  this.getTransition("t000");
	}
}