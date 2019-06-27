/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioRenameButton from "../../Extends/CommonBase/StudioRenameButton";

export default class StudioRenameButtonStruct extends fairygui.GButton
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdicwpxmw3";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():StudioRenameButton {
		return <StudioRenameButton><any>(fairygui.UIPackage.createObject("CommonBase","StudioRenameButton"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}