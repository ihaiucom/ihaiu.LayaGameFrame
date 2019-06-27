/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartPolygonPropertyText from "../../Extends/CommonBase/ChartPolygonPropertyText";

export default class ChartPolygonPropertyTextStruct extends fairygui.GComponent
{
	public m_name : fairygui.GTextField;
	public m_value : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicl291vo";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ChartPolygonPropertyText {
		return <ChartPolygonPropertyText><any>(fairygui.UIPackage.createObject("CommonBase","ChartPolygonPropertyText"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_name = <fairygui.GTextField><any>(this.getChild("name"));
		this.m_value = <fairygui.GTextField><any>(this.getChild("value"));
		
		
	}
}