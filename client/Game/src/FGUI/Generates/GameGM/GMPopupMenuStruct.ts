/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMPopupMenu from "../../Extends/GameGM/GMPopupMenu";

export default class GMPopupMenuStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;

	
	public static URL:string = "ui://46xcitpdm23g4";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMPopupMenu {
		return <GMPopupMenu><any>(fairygui.UIPackage.createObject("GameGM","GMPopupMenu"));
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