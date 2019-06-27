/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMCmdItem from "../../Extends/GameGM/GMCmdItem";

export default class GMCmdItemStruct extends fairygui.GComponent
{
	public m_title : fairygui.GTextInput;
	public m_name : fairygui.GRichTextField;
	public m_button : fairygui.GButton;

	
	public static URL:string = "ui://46xcitpdket7n";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMCmdItem {
		return <GMCmdItem><any>(fairygui.UIPackage.createObject("GameGM","GMCmdItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
		this.m_name = <fairygui.GRichTextField><any>(this.getChild("name"));
		this.m_button = <fairygui.GButton><any>(this.getChild("button"));
		
		
	}
}