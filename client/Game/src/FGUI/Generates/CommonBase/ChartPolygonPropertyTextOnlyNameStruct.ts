/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartPolygonPropertyTextOnlyName from "../../Extends/CommonBase/ChartPolygonPropertyTextOnlyName";

export default class ChartPolygonPropertyTextOnlyNameStruct extends fairygui.GComponent
{
	public m_name : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicmfspx6";
	
	public static DependPackages:string[] = ["CommonBase"];

	
	public static createInstance():ChartPolygonPropertyTextOnlyName {
		return <ChartPolygonPropertyTextOnlyName><any>(fairygui.UIPackage.createObject("CommonBase","ChartPolygonPropertyTextOnlyName"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_name = <fairygui.GTextField><any>(this.getChild("name"));
		
		
	}
}