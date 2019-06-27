/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemGetRewardDialogContent from "../../Extends/SystemModuleDialog/ItemGetRewardDialogContent";
import ItemGetWayDialog from "../../Extends/SystemModuleDialog/ItemGetWayDialog";

export default class ItemGetWayDialogStruct extends fairygui.GComponent
{
	public m_content : ItemGetRewardDialogContent;

	
	public static URL:string = "ui://q5yddivtma8e14";
	
	public static DependPackages:string[] = ["SystemModuleDialog","_ResImageUIV1","CommonBase","CommonGame"];

	
	public static createInstance():ItemGetWayDialog {
		return <ItemGetWayDialog><any>(fairygui.UIPackage.createObject("SystemModuleDialog","ItemGetWayDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_content = <ItemGetRewardDialogContent><any>(this.getChild("content"));
		
		
	}
}