/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BarSquare from "../../Extends/GameLaunch/BarSquare";
import ProgressRedBar from "../../Extends/GameLaunch/ProgressRedBar";

export default class ProgressRedBarStruct extends fairygui.GProgressBar
{
	public m_bar : fairygui.GImage;
	public m_top : fairygui.GImage;
	public m_barSquare : BarSquare;

	
	public static URL:string = "ui://47qsdr42f84s3";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():ProgressRedBar {
		return <ProgressRedBar><any>(fairygui.UIPackage.createObject("GameLaunch","ProgressRedBar"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		this.m_top = <fairygui.GImage><any>(this.getChild("top"));
		this.m_barSquare = <BarSquare><any>(this.getChild("barSquare"));
		
		
	}
}