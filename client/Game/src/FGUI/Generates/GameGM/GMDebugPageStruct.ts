/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMSubMenuBar from "../../Extends/GameGM/GMSubMenuBar";
import GMDebugPage from "../../Extends/GameGM/GMDebugPage";

export default class GMDebugPageStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;
	public m_subMenuBar : GMSubMenuBar;
	public m_clearButton : fairygui.GButton;
	public m_refreshButton : fairygui.GButton;

	
	public static URL:string = "ui://46xcitpdfbyi8";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMDebugPage {
		return <GMDebugPage><any>(fairygui.UIPackage.createObject("GameGM","GMDebugPage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		this.m_subMenuBar = <GMSubMenuBar><any>(this.getChild("subMenuBar"));
		this.m_clearButton = <fairygui.GButton><any>(this.getChild("clearButton"));
		this.m_refreshButton = <fairygui.GButton><any>(this.getChild("refreshButton"));
		
		
	}
}