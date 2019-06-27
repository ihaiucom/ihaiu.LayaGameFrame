/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RenameInput from "../../Extends/CommonBase/RenameInput";

export default class RenameInputStruct extends fairygui.GLabel
{
	public m_title : fairygui.GTextInput;

	
	public static URL:string = "ui://jaoapdicu6goi";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():RenameInput {
		return <RenameInput><any>(fairygui.UIPackage.createObject("CommonBase","RenameInput"));
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