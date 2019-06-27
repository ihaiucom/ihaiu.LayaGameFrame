/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import FilmMoveShow from "../../Extends/CommonFx/FilmMoveShow";

export default class FilmMoveShowStruct extends fairygui.GButton
{
	public m_moveShow : fairygui.Transition;
	public m_icon : fairygui.GLoader;
	public m_1 : fairygui.GLoader;
	public m_2 : fairygui.GLoader;
	public m_3 : fairygui.GLoader;
	public m_4 : fairygui.GLoader;
	public m_5 : fairygui.GLoader;
	public m_mask : fairygui.GGraph;

	
	public static URL:string = "ui://4ykhynlrh69fl";
	
	public static DependPackages:string[] = ["CommonFx"];

	
	public static createInstance():FilmMoveShow {
		return <FilmMoveShow><any>(fairygui.UIPackage.createObject("CommonFx","FilmMoveShow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_1 = <fairygui.GLoader><any>(this.getChild("1"));
		this.m_2 = <fairygui.GLoader><any>(this.getChild("2"));
		this.m_3 = <fairygui.GLoader><any>(this.getChild("3"));
		this.m_4 = <fairygui.GLoader><any>(this.getChild("4"));
		this.m_5 = <fairygui.GLoader><any>(this.getChild("5"));
		this.m_mask = <fairygui.GGraph><any>(this.getChild("mask"));
		
		
		this.m_moveShow =  this.getTransition("moveShow");
	}
}