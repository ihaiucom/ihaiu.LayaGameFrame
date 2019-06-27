/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagActorItem from "../../Extends/ModuleBag/BagActorItem";

export default class BagActorItemStruct extends fairygui.GComponent
{
	public m_item : fairygui.GObject;

	
	public static URL:string = "ui://4mjxxvpqncg94";
	
	public static DependPackages:string[] = ["ModuleBag"];

	
	public static createInstance():BagActorItem {
		return <BagActorItem><any>(fairygui.UIPackage.createObject("ModuleBag","BagActorItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_item = <fairygui.GObject><any>(this.getChild("item"));
		
		
	}
}