/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import AlertDialogBackground from "../../Extends/SystemModuleDialog/AlertDialogBackground";
import TextScroll from "../../Extends/SystemModuleDialog/TextScroll";
import YellowSmallButton from "../../Extends/CommonBase/YellowSmallButton";
import MailContentDialog from "../../Extends/SystemModuleDialog/MailContentDialog";

export default class MailContentDialogStruct extends fairygui.GComponent
{
	public m_reward : fairygui.Controller;
	public m_time : fairygui.GTextField;
	public m_listReward : fairygui.GList;
	public m_tipHasReward : fairygui.GImage;
	public m_title : fairygui.GTextField;
	public m_Msg1 : fairygui.GTextField;
	public m_Msg2 : fairygui.GTextField;
	public m_closeBtn : AlertDialogBackground;
	public m_content : TextScroll;
	public m_btnClose : fairygui.GObject;
	public m_btnDelect : YellowSmallButton;
	public m_btnReward : YellowSmallButton;

	
	public static URL:string = "ui://q5yddivtxa7oo";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","_ResImageUI"];

	
	public static createInstance():MailContentDialog {
		return <MailContentDialog><any>(fairygui.UIPackage.createObject("SystemModuleDialog","MailContentDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_reward = this.getController("reward");

		
		this.m_time = <fairygui.GTextField><any>(this.getChild("time"));
		this.m_listReward = <fairygui.GList><any>(this.getChild("listReward"));
		this.m_tipHasReward = <fairygui.GImage><any>(this.getChild("tipHasReward"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_Msg1 = <fairygui.GTextField><any>(this.getChild("Msg1"));
		this.m_Msg2 = <fairygui.GTextField><any>(this.getChild("Msg2"));
		this.m_closeBtn = <AlertDialogBackground><any>(this.getChild("closeBtn"));
		this.m_content = <TextScroll><any>(this.getChild("content"));
		this.m_btnClose = <fairygui.GObject><any>(this.getChild("btnClose"));
		this.m_btnDelect = <YellowSmallButton><any>(this.getChild("btnDelect"));
		this.m_btnReward = <YellowSmallButton><any>(this.getChild("btnReward"));
		
		
	}
}