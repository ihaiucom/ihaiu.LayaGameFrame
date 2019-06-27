/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseFullWindowUI from "../../Extends/CommonBase/BaseFullWindowUI";
import BagTabBar from "../../Extends/CommonBase/BagTabBar";
import BagInfoIconItem from "../../Extends/ModuleBag/BagInfoIconItem";
import PinkButton from "../../Extends/CommonBase/PinkButton";
import GetInformationDialog from "../../Extends/ModuleBag/GetInformationDialog";
import BagWindowUI from "../../Extends/ModuleBag/BagWindowUI";

export default class BagWindowUIStruct extends fairygui.GComponent
{
	public m_showItemInfo : fairygui.Controller;
	public m_showInfoDialog : fairygui.Controller;
	public m_itemList : fairygui.GList;
	public m_frame : BaseFullWindowUI;
	public m_tabBar : BagTabBar;
	public m_bagInfo : BagInfoIconItem;
	public m_splitBtn : PinkButton;
	public m_compoundBtn : PinkButton;
	public m_useBtn : PinkButton;
	public m_saleBtn : PinkButton;
	public m_infoDialog : GetInformationDialog;

	
	public static URL:string = "ui://4mjxxvpqeftv0";
	
	public static DependPackages:string[] = ["ModuleBag","CommonBase","CommonGame"];

	
	public static createInstance():BagWindowUI {
		return <BagWindowUI><any>(fairygui.UIPackage.createObject("ModuleBag","BagWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_showItemInfo = this.getController("showItemInfo");
		this.m_showInfoDialog = this.getController("showInfoDialog");

		
		this.m_itemList = <fairygui.GList><any>(this.getChild("itemList"));
		this.m_frame = <BaseFullWindowUI><any>(this.getChild("frame"));
		this.m_tabBar = <BagTabBar><any>(this.getChild("tabBar"));
		this.m_bagInfo = <BagInfoIconItem><any>(this.getChild("bagInfo"));
		this.m_splitBtn = <PinkButton><any>(this.getChild("splitBtn"));
		this.m_compoundBtn = <PinkButton><any>(this.getChild("compoundBtn"));
		this.m_useBtn = <PinkButton><any>(this.getChild("useBtn"));
		this.m_saleBtn = <PinkButton><any>(this.getChild("saleBtn"));
		this.m_infoDialog = <GetInformationDialog><any>(this.getChild("infoDialog"));
		
		
	}
}