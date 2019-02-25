/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import ProgressRedBar from "../../Extends/GameLaunch/ProgressRedBar";
import LaunchLoaderPanel from "../../Extends/GameLaunch/LaunchLoaderPanel";

export default class LaunchLoaderPanelStruct extends fairygui.GComponent
{
	public m_title : fairygui.GTextField;
	public m_help : fairygui.GRichTextField;
	public m_txt_resVer : fairygui.GTextField;
	public m_txt_gamever : fairygui.GTextField;
	public m_screenBG : ScreenBG;
	public m_progressBar : ProgressRedBar;

	
	public static URL:string = "ui://47qsdr42f84s0";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():LaunchLoaderPanel {
		return <LaunchLoaderPanel><any>(fairygui.UIPackage.createObject("GameLaunch","LaunchLoaderPanel"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_help = <fairygui.GRichTextField><any>(this.getChild("help"));
		this.m_txt_resVer = <fairygui.GTextField><any>(this.getChild("txt_resVer"));
		this.m_txt_gamever = <fairygui.GTextField><any>(this.getChild("txt_gamever"));
		this.m_screenBG = <ScreenBG><any>(this.getChild("screenBG"));
		this.m_progressBar = <ProgressRedBar><any>(this.getChild("progressBar"));
		
		
	}
}