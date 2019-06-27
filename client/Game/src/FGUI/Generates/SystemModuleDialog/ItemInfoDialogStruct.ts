/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AlertDialogBackground from "../../Extends/SystemModuleDialog/AlertDialogBackground";
import ItemIconItem from "../../Extends/CommonGame/ItemIconItem";
import ItemInfoDialog from "../../Extends/SystemModuleDialog/ItemInfoDialog";

export default class ItemInfoDialogStruct extends fairygui.GComponent
{
	public m_itemName : fairygui.GTextField;
	public m_itemContent : fairygui.GTextField;
	public m_closeBtn : AlertDialogBackground;
	public m_item : ItemIconItem;

	
	public static URL:string = "ui://q5yddivtnetkp";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","CommonGame","_ResImageUI"];

	
	public static createInstance():ItemInfoDialog {
		return <ItemInfoDialog><any>(fairygui.UIPackage.createObject("SystemModuleDialog","ItemInfoDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_itemName = <fairygui.GTextField><any>(this.getChild("itemName"));
		this.m_itemContent = <fairygui.GTextField><any>(this.getChild("itemContent"));
		this.m_closeBtn = <AlertDialogBackground><any>(this.getChild("closeBtn"));
		this.m_item = <ItemIconItem><any>(this.getChild("item"));
		
		
	}
}