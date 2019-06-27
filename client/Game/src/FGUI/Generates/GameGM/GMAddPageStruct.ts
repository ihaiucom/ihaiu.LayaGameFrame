/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GMPopupButton from "../../Extends/GameGM/GMPopupButton";
import TextInput from "../../Extends/GameGM/TextInput";
import GMAddPage from "../../Extends/GameGM/GMAddPage";

export default class GMAddPageStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;
	public m_popupButton : GMPopupButton;
	public m_filterInput : TextInput;
	public m_filterCheckbox : fairygui.GButton;
	public m_listTopButton : fairygui.GButton;
	public m_listBottomButton : fairygui.GButton;

	
	public static URL:string = "ui://46xcitpdfbyi9";
	
	public static DependPackages:string[] = ["GameGM"];

	
	public static createInstance():GMAddPage {
		return <GMAddPage><any>(fairygui.UIPackage.createObject("GameGM","GMAddPage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		this.m_popupButton = <GMPopupButton><any>(this.getChild("popupButton"));
		this.m_filterInput = <TextInput><any>(this.getChild("filterInput"));
		this.m_filterCheckbox = <fairygui.GButton><any>(this.getChild("filterCheckbox"));
		this.m_listTopButton = <fairygui.GButton><any>(this.getChild("listTopButton"));
		this.m_listBottomButton = <fairygui.GButton><any>(this.getChild("listBottomButton"));
		
		
	}
}