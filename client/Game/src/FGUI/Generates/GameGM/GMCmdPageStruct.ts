/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMSubMenuRadioBar from "../../Extends/GameGM/GMSubMenuRadioBar";
import TextArea from "../../Extends/GameGM/TextArea";
import GMCmdPage from "../../Extends/GameGM/GMCmdPage";

export default class GMCmdPageStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;
	public m_subMenuBar : GMSubMenuRadioBar;
	public m_input : TextArea;
	public m_sendButton : fairygui.GButton;
	public m_clearButton : fairygui.GButton;

	
	public static URL:string = "ui://46xcitpdket7k";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMCmdPage {
		return <GMCmdPage><any>(fairygui.UIPackage.createObject("GameGM","GMCmdPage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		this.m_subMenuBar = <GMSubMenuRadioBar><any>(this.getChild("subMenuBar"));
		this.m_input = <TextArea><any>(this.getChild("input"));
		this.m_sendButton = <fairygui.GButton><any>(this.getChild("sendButton"));
		this.m_clearButton = <fairygui.GButton><any>(this.getChild("clearButton"));
		
		
	}
}