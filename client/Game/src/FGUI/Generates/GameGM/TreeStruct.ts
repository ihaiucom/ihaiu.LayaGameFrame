/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Tree from "../../Extends/GameGM/Tree";

export default class TreeStruct extends fairygui.GComponent
{

	
	public static URL:string = "ui://46xcitpdx6hop";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():Tree {
		return <Tree><any>(fairygui.UIPackage.createObject("GameGM","Tree"));
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