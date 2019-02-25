/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BarSquare from "../../Extends/GameLaunch/BarSquare";

export default class BarSquareStruct extends fairygui.GComponent
{
	public m_t1 : fairygui.Transition;

	
	public static URL:string = "ui://47qsdr42f84s6";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():BarSquare {
		return <BarSquare><any>(fairygui.UIPackage.createObject("GameLaunch","BarSquare"));
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