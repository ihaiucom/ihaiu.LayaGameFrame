/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberInput from "../../Extends/GameGM/NumberInput";

export default class NumberInputStruct extends fairygui.GComponent
{
	public m_title : fairygui.GTextInput;
	public m_downButton : fairygui.GButton;
	public m_upButton : fairygui.GButton;

	
	public static URL:string = "ui://46xcitpdfv0tf";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():NumberInput {
		return <NumberInput><any>(fairygui.UIPackage.createObject("GameGM","NumberInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
		this.m_downButton = <fairygui.GButton><any>(this.getChild("downButton"));
		this.m_upButton = <fairygui.GButton><any>(this.getChild("upButton"));
		
		
	}
}