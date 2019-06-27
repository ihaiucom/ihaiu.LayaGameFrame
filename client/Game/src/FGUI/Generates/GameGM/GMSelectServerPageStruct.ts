/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMSelectServerPage from "../../Extends/GameGM/GMSelectServerPage";

export default class GMSelectServerPageStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;

	
	public static URL:string = "ui://46xcitpdket7j";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMSelectServerPage {
		return <GMSelectServerPage><any>(fairygui.UIPackage.createObject("GameGM","GMSelectServerPage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		
		
	}
}