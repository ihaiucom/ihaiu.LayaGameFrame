/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MailLoader from "../../Extends/ModuleEmail/MailLoader";

export default class MailLoaderStruct extends fairygui.GComponent
{

	
	public static URL:string = "ui://41exsi4svqq04";
	
	public static DependPackages:string[] = ["ModuleEmail"];

	
	public static createInstance():MailLoader {
		return <MailLoader><any>(fairygui.UIPackage.createObject("ModuleEmail","MailLoader"));
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