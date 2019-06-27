/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartPolygonPropertyView from "../../Extends/CommonBase/ChartPolygonPropertyView";

export default class ChartPolygonPropertyViewStruct extends fairygui.GComponent
{
	public m_tmp : fairygui.GImage;

	
	public static URL:string = "ui://jaoapdicl291vj";
	
	public static DependPackages:string[] = ["CommonBase","__ResImageTmp"];

	
	public static createInstance():ChartPolygonPropertyView {
		return <ChartPolygonPropertyView><any>(fairygui.UIPackage.createObject("CommonBase","ChartPolygonPropertyView"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_tmp = <fairygui.GImage><any>(this.getChild("tmp"));
		
		
	}
}