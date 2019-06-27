/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TextInput from "../../Extends/GameGM/TextInput";

export default class TextInputStruct extends fairygui.GButton
{
	public m_title : fairygui.GTextInput;

	
	public static URL:string = "ui://46xcitpdfv0tb";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():TextInput {
		return <TextInput><any>(fairygui.UIPackage.createObject("GameGM","TextInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
		
		
	}
}