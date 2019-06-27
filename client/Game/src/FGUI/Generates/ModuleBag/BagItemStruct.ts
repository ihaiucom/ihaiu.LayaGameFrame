/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemIconItem from "../../Extends/CommonGame/ItemIconItem";
import BagItem from "../../Extends/ModuleBag/BagItem";

export default class BagItemStruct extends fairygui.GComponent
{
	public m_item : ItemIconItem;

	
	public static URL:string = "ui://4mjxxvpqncg92";
	
	public static DependPackages:string[] = ["ModuleBag","CommonGame"];

	
	public static createInstance():BagItem {
		return <BagItem><any>(fairygui.UIPackage.createObject("ModuleBag","BagItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_item = <ItemIconItem><any>(this.getChild("item"));
		
		
	}
}