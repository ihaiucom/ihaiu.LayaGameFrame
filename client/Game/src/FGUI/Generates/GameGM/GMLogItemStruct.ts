/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMLogItem from "../../Extends/GameGM/GMLogItem";

export default class GMLogItemStruct extends fairygui.GLabel
{
	public m_title : fairygui.GRichTextField;

	
	public static URL:string = "ui://46xcitpdsy3ro";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMLogItem {
		return <GMLogItem><any>(fairygui.UIPackage.createObject("GameGM","GMLogItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GRichTextField><any>(this.getChild("title"));
		
		
	}
}