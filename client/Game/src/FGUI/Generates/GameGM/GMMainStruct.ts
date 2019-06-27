/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMMenuBar from "../../Extends/GameGM/GMMenuBar";
import GMDebugPage from "../../Extends/GameGM/GMDebugPage";
import GMAddPage from "../../Extends/GameGM/GMAddPage";
import GMSelectServerPage from "../../Extends/GameGM/GMSelectServerPage";
import GMCmdPage from "../../Extends/GameGM/GMCmdPage";
import GMDisplayTreePage from "../../Extends/GameGM/GMDisplayTreePage";
import GMTimeLoopPage from "../../Extends/GameGM/GMTimeLoopPage";
import GMTickPage from "../../Extends/GameGM/GMTickPage";
import GMMain from "../../Extends/GameGM/GMMain";

export default class GMMainStruct extends fairygui.GComponent
{
	public m_mainMenu : GMMenuBar;
	public m_debugPage : GMDebugPage;
	public m_addPage : GMAddPage;
	public m_selectServerPage : GMSelectServerPage;
	public m_closeButton : fairygui.GButton;
	public m_cmdPage : GMCmdPage;
	public m_displayTreePage : GMDisplayTreePage;
	public m_timeLoopPage : GMTimeLoopPage;
	public m_tickPage : GMTickPage;

	
	public static URL:string = "ui://46xcitpd9nrl0";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMMain {
		return <GMMain><any>(fairygui.UIPackage.createObject("GameGM","GMMain"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_mainMenu = <GMMenuBar><any>(this.getChild("mainMenu"));
		this.m_debugPage = <GMDebugPage><any>(this.getChild("debugPage"));
		this.m_addPage = <GMAddPage><any>(this.getChild("addPage"));
		this.m_selectServerPage = <GMSelectServerPage><any>(this.getChild("selectServerPage"));
		this.m_closeButton = <fairygui.GButton><any>(this.getChild("closeButton"));
		this.m_cmdPage = <GMCmdPage><any>(this.getChild("cmdPage"));
		this.m_displayTreePage = <GMDisplayTreePage><any>(this.getChild("displayTreePage"));
		this.m_timeLoopPage = <GMTimeLoopPage><any>(this.getChild("timeLoopPage"));
		this.m_tickPage = <GMTickPage><any>(this.getChild("tickPage"));
		
		
	}
}