/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMTimeLoopPage from "../../Extends/GameGM/GMTimeLoopPage";

export default class GMTimeLoopPageStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;
	public m_refreshButton : fairygui.GButton;
	public m_clearButton : fairygui.GButton;
	public m_sortCostTimeToalButton : fairygui.GButton;
	public m_sorteEvaluateButton : fairygui.GButton;
	public m_sorteCallNumButton : fairygui.GButton;
	public m_sorteCostTimeButton : fairygui.GButton;

	
	public static URL:string = "ui://46xcitpd7h8s10";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMTimeLoopPage {
		return <GMTimeLoopPage><any>(fairygui.UIPackage.createObject("GameGM","GMTimeLoopPage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		this.m_refreshButton = <fairygui.GButton><any>(this.getChild("refreshButton"));
		this.m_clearButton = <fairygui.GButton><any>(this.getChild("clearButton"));
		this.m_sortCostTimeToalButton = <fairygui.GButton><any>(this.getChild("sortCostTimeToalButton"));
		this.m_sorteEvaluateButton = <fairygui.GButton><any>(this.getChild("sorteEvaluateButton"));
		this.m_sorteCallNumButton = <fairygui.GButton><any>(this.getChild("sorteCallNumButton"));
		this.m_sorteCostTimeButton = <fairygui.GButton><any>(this.getChild("sorteCostTimeButton"));
		
		
	}
}