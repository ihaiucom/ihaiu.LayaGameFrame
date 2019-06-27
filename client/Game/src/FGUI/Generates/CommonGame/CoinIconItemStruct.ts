/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CoinIconItem from "../../Extends/CommonGame/CoinIconItem";

export default class CoinIconItemStruct extends fairygui.GComponent
{

	
	public static URL:string = "ui://4snov4n9ncg97";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():CoinIconItem {
		return <CoinIconItem><any>(fairygui.UIPackage.createObject("CommonGame","coinIconItem"));
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