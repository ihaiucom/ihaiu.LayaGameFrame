/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PenButon from "../../Extends/CommonBase/PenButon";
import RenameInput2 from "../../Extends/CommonBase/RenameInput2";

export default class RenameInput2Struct extends fairygui.GLabel
{
	public m_title : fairygui.GTextInput;
	public m_randomBtn : PenButon;

	
	public static URL:string = "ui://jaoapdicwpxmw2";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():RenameInput2 {
		return <RenameInput2><any>(fairygui.UIPackage.createObject("CommonBase","RenameInput2"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
		this.m_randomBtn = <PenButon><any>(this.getChild("randomBtn"));
		
		
	}
}