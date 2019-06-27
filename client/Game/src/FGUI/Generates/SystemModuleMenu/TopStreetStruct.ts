/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberBadge from "../../Extends/CommonBase/NumberBadge";
import TopStreet from "../../Extends/SystemModuleMenu/TopStreet";

export default class TopStreetStruct extends fairygui.GButton
{
	public m_t0 : fairygui.Transition;
	public m_streetRank : fairygui.GTextField;
	public m_streetName : fairygui.GTextField;
	public m_red : NumberBadge;

	
	public static URL:string = "ui://4rsi5gesszhv15";
	
	public static DependPackages:string[] = ["SystemModuleMenu","CommonBase","_ResImageUIV1"];

	
	public static createInstance():TopStreet {
		return <TopStreet><any>(fairygui.UIPackage.createObject("SystemModuleMenu","TopStreet"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_streetRank = <fairygui.GTextField><any>(this.getChild("streetRank"));
		this.m_streetName = <fairygui.GTextField><any>(this.getChild("streetName"));
		this.m_red = <NumberBadge><any>(this.getChild("red"));
		
		
		this.m_t0 =  this.getTransition("t0");
	}
}