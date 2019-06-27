/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseFullWindowUI from "../../Extends/CommonBase/BaseFullWindowUI";
import YellowBigButton from "../../Extends/CommonBase/YellowBigButton";
import BlueButton from "../../Extends/CommonBase/BlueButton";
import MailWindowUI from "../../Extends/ModuleEmail/MailWindowUI";

export default class MailWindowUIStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;
	public m_tip : fairygui.GTextField;
	public m_NoMail : fairygui.GGroup;
	public m_frame : BaseFullWindowUI;
	public m_btnReward : YellowBigButton;
	public m_btnDelect : BlueButton;

	
	public static URL:string = "ui://41exsi4sszhv0";
	
	public static DependPackages:string[] = ["ModuleEmail","CommonBase","_ResImageUI"];

	
	public static createInstance():MailWindowUI {
		return <MailWindowUI><any>(fairygui.UIPackage.createObject("ModuleEmail","MailWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		this.m_tip = <fairygui.GTextField><any>(this.getChild("tip"));
		this.m_NoMail = <fairygui.GGroup><any>(this.getChild("NoMail"));
		this.m_frame = <BaseFullWindowUI><any>(this.getChild("frame"));
		this.m_btnReward = <YellowBigButton><any>(this.getChild("btnReward"));
		this.m_btnDelect = <BlueButton><any>(this.getChild("btnDelect"));
		
		
	}
}