/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Beat01 from "../../Extends/CommonFx/Beat01";

export default class Beat01Struct extends fairygui.GComponent
{
	public m_smoke_a001 : fairygui.Transition;
	public m_smoke_n9 : fairygui.GImage;
	public m_smoke_n8 : fairygui.GImage;
	public m_smoke_n3 : fairygui.GImage;
	public m_smoke_n2 : fairygui.GImage;
	public m_smoke_n5 : fairygui.GImage;
	public m_smoke_n6 : fairygui.GImage;
	public m_smoke_n10 : fairygui.GImage;
	public m_smoke_n11 : fairygui.GImage;
	public m_smoke_n12 : fairygui.GImage;
	public m_smoke_n16 : fairygui.GImage;
	public m_smoke_n13 : fairygui.GImage;
	public m_smoke_n4 : fairygui.GImage;
	public m_smoke_n14 : fairygui.GImage;
	public m_smoke_n15 : fairygui.GImage;
	public m_smoke_n17 : fairygui.GImage;
	public m_smoke_n18 : fairygui.GImage;
	public m_smoke_n19 : fairygui.GImage;
	public m_smoke_n20 : fairygui.GImage;
	public m_smoke_n21 : fairygui.GImage;
	public m_n2323133d : fairygui.GImage;

	
	public static URL:string = "ui://4ykhynlrh96rq";
	
	public static DependPackages:string[] = ["CommonFx"];

	
	public static createInstance():Beat01 {
		return <Beat01><any>(fairygui.UIPackage.createObject("CommonFx","beat01"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_smoke_n9 = <fairygui.GImage><any>(this.getChild("smoke_n9"));
		this.m_smoke_n8 = <fairygui.GImage><any>(this.getChild("smoke_n8"));
		this.m_smoke_n3 = <fairygui.GImage><any>(this.getChild("smoke_n3"));
		this.m_smoke_n2 = <fairygui.GImage><any>(this.getChild("smoke_n2"));
		this.m_smoke_n5 = <fairygui.GImage><any>(this.getChild("smoke_n5"));
		this.m_smoke_n6 = <fairygui.GImage><any>(this.getChild("smoke_n6"));
		this.m_smoke_n10 = <fairygui.GImage><any>(this.getChild("smoke_n10"));
		this.m_smoke_n11 = <fairygui.GImage><any>(this.getChild("smoke_n11"));
		this.m_smoke_n12 = <fairygui.GImage><any>(this.getChild("smoke_n12"));
		this.m_smoke_n16 = <fairygui.GImage><any>(this.getChild("smoke_n16"));
		this.m_smoke_n13 = <fairygui.GImage><any>(this.getChild("smoke_n13"));
		this.m_smoke_n4 = <fairygui.GImage><any>(this.getChild("smoke_n4"));
		this.m_smoke_n14 = <fairygui.GImage><any>(this.getChild("smoke_n14"));
		this.m_smoke_n15 = <fairygui.GImage><any>(this.getChild("smoke_n15"));
		this.m_smoke_n17 = <fairygui.GImage><any>(this.getChild("smoke_n17"));
		this.m_smoke_n18 = <fairygui.GImage><any>(this.getChild("smoke_n18"));
		this.m_smoke_n19 = <fairygui.GImage><any>(this.getChild("smoke_n19"));
		this.m_smoke_n20 = <fairygui.GImage><any>(this.getChild("smoke_n20"));
		this.m_smoke_n21 = <fairygui.GImage><any>(this.getChild("smoke_n21"));
		this.m_n2323133d = <fairygui.GImage><any>(this.getChild("n2323133d"));
		
		
		this.m_smoke_a001 =  this.getTransition("smoke_a001");
	}
}