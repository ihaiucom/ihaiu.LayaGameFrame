/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioRenameButton from "../../Extends/CommonBase/StudioRenameButton";
import GetRewardDialog from "../../Extends/SystemModuleDialog/GetRewardDialog";

export default class GetRewardDialogStruct extends fairygui.GComponent
{
	public m_boxHeightCtrl : fairygui.Controller;
	public m_bg : fairygui.GLoader;
	public m_list : fairygui.GList;
	public m_confirmBtn : StudioRenameButton;

	
	public static URL:string = "ui://q5yddivte5hko";
	
	public static DependPackages:string[] = ["SystemModuleDialog","CommonBase","_ResImageUIV1"];

	
	public static createInstance():GetRewardDialog {
		return <GetRewardDialog><any>(fairygui.UIPackage.createObject("SystemModuleDialog","GetRewardDialog"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_boxHeightCtrl = this.getController("boxHeightCtrl");

		
		this.m_bg = <fairygui.GLoader><any>(this.getChild("bg"));
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		this.m_confirmBtn = <StudioRenameButton><any>(this.getChild("confirmBtn"));
		
		
	}
}