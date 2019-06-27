/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AssetItem from "../../Extends/CommonGame/AssetItem";

export default class AssetItemStruct extends fairygui.GLabel
{
	public m_showBg : fairygui.Controller;
	public m_assetLoader : fairygui.GLoader;
	public m_title : fairygui.GTextField;

	
	public static URL:string = "ui://4snov4n9e5hkg";
	
	public static DependPackages:string[] = ["CommonGame","_ResImageUI"];

	
	public static createInstance():AssetItem {
		return <AssetItem><any>(fairygui.UIPackage.createObject("CommonGame","AssetItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_showBg = this.getController("showBg");

		
		this.m_assetLoader = <fairygui.GLoader><any>(this.getChild("assetLoader"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		
		
	}
}