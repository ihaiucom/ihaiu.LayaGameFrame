/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import EmptyButton from "../../Extends/CommonBase/EmptyButton";
import AlertDialogBackground from "../../Extends/SystemModuleDialog/AlertDialogBackground";

export default class AlertDialogBackgroundStruct extends fairygui.GComponent
{
	public m_closeBtn : EmptyButton;

	
	public static URL:string = "ui://q5yddivtncg9m";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","_ResImageUIV1"];

	
	public static createInstance():AlertDialogBackground {
		return <AlertDialogBackground><any>(fairygui.UIPackage.createObject("SystemModuleDialog","AlertDialogBackground"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_closeBtn = <EmptyButton><any>(this.getChild("closeBtn"));
		
		
	}
}