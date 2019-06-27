/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BlueButton from "../../Extends/CommonBase/BlueButton";

export default class BlueButtonStruct extends fairygui.GButton
{
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://jaoapdict3as2";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BlueButton {
		return <BlueButton><any>(fairygui.UIPackage.createObject("CommonBase","BlueButton"));
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