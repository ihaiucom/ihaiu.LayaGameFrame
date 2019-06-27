/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Tree from "../../Extends/GameGM/Tree";
import GMDisplayTreePage from "../../Extends/GameGM/GMDisplayTreePage";

export default class GMDisplayTreePageStruct extends fairygui.GComponent
{
	public m_tree : Tree;
	public m_refreshButton : fairygui.GButton;
	public m_showSelectButton : fairygui.GButton;
	public m_hideSelectButton : fairygui.GButton;
	public m_noSelectButton : fairygui.GButton;
	public m_parentLayerButton : fairygui.GButton;
	public m_setLayerButton : fairygui.GButton;

	
	public static URL:string = "ui://46xcitpdx6hov";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMDisplayTreePage {
		return <GMDisplayTreePage><any>(fairygui.UIPackage.createObject("GameGM","GMDisplayTreePage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_tree = <Tree><any>(this.getChild("tree"));
		this.m_refreshButton = <fairygui.GButton><any>(this.getChild("refreshButton"));
		this.m_showSelectButton = <fairygui.GButton><any>(this.getChild("showSelectButton"));
		this.m_hideSelectButton = <fairygui.GButton><any>(this.getChild("hideSelectButton"));
		this.m_noSelectButton = <fairygui.GButton><any>(this.getChild("noSelectButton"));
		this.m_parentLayerButton = <fairygui.GButton><any>(this.getChild("parentLayerButton"));
		this.m_setLayerButton = <fairygui.GButton><any>(this.getChild("setLayerButton"));
		
		
	}
}