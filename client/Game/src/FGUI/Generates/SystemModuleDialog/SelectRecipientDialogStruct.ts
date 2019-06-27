/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SelectRecipientDialog from "../../Extends/SystemModuleDialog/SelectRecipientDialog";

export default class SelectRecipientDialogStruct extends fairygui.GComponent
{

	
	public static URL:string = "ui://q5yddivtncg93";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase"];

	
	public static createInstance():SelectRecipientDialog {
		return <SelectRecipientDialog><any>(fairygui.UIPackage.createObject("SystemModuleDialog","SelectRecipientDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		
		
	}
}