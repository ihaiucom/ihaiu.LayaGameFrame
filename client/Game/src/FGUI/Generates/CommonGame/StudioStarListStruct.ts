/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioStarList from "../../Extends/CommonGame/StudioStarList";

export default class StudioStarListStruct extends fairygui.GComponent
{
	public m_starNum : fairygui.Controller;
	public m_s1 : fairygui.GLoader;
	public m_s2 : fairygui.GLoader;
	public m_s3 : fairygui.GLoader;
	public m_s4 : fairygui.GLoader;
	public m_s5 : fairygui.GLoader;

	
	public static URL:string = "ui://4snov4n9wljjt";
	
	public static DependPackages:string[] = ["CommonGame"];

	
	public static createInstance():StudioStarList {
		return <StudioStarList><any>(fairygui.UIPackage.createObject("CommonGame","StudioStarList"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_starNum = this.getController("starNum");

		
		this.m_s1 = <fairygui.GLoader><any>(this.getChild("s1"));
		this.m_s2 = <fairygui.GLoader><any>(this.getChild("s2"));
		this.m_s3 = <fairygui.GLoader><any>(this.getChild("s3"));
		this.m_s4 = <fairygui.GLoader><any>(this.getChild("s4"));
		this.m_s5 = <fairygui.GLoader><any>(this.getChild("s5"));
		
		
	}
}