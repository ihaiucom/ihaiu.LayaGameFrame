/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseAlertDialog from "../../Extends/SystemModuleDialog/BaseAlertDialog";

export default class BaseAlertDialogStruct extends fairygui.GLabel
{
	public m_title : fairygui.GTextField;
	public m_closeBtn : fairygui.GObject;

	
	public static URL:string = "ui://q5yddivtncg91";
	
	public static DependPackages:string[] = ["SystemModuleDialog","_ResImageUI"];

	
	public static createInstance():BaseAlertDialog {
		return <BaseAlertDialog><any>(fairygui.UIPackage.createObject("SystemModuleDialog","BaseAlertDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_closeBtn = <fairygui.GObject><any>(this.getChild("closeBtn"));
		
		
	}
}