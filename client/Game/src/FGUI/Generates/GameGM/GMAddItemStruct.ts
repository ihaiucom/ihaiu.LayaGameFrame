/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import NumberInput from "../../Extends/GameGM/NumberInput";
import GMAddItem from "../../Extends/GameGM/GMAddItem";

export default class GMAddItemStruct extends fairygui.GComponent
{
	public m_id : fairygui.GTextField;
	public m_title : fairygui.GTextField;
	public m_describe : fairygui.GTextField;
	public m_icon : fairygui.GLoader;
	public m_num : fairygui.GTextField;
	public m_button : fairygui.GButton;
	public m_numberInput : NumberInput;

	
	public static URL:string = "ui://46xcitpdfv0tc";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMAddItem {
		return <GMAddItem><any>(fairygui.UIPackage.createObject("GameGM","GMAddItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_id = <fairygui.GTextField><any>(this.getChild("id"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_describe = <fairygui.GTextField><any>(this.getChild("describe"));
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_num = <fairygui.GTextField><any>(this.getChild("num"));
		this.m_button = <fairygui.GButton><any>(this.getChild("button"));
		this.m_numberInput = <NumberInput><any>(this.getChild("numberInput"));
		
		
	}
}