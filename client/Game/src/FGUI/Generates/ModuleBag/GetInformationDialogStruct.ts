/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioRenameButton from "../../Extends/CommonBase/StudioRenameButton";
import GetInformationDialog from "../../Extends/ModuleBag/GetInformationDialog";

export default class GetInformationDialogStruct extends fairygui.GComponent
{
	public m_boxHeightCtrl : fairygui.Controller;
	public m_bg : fairygui.GLoader;
	public m_list : fairygui.GList;
	public m_confirmBtn : StudioRenameButton;

	
	public static URL:string = "ui://4mjxxvpqlg7x16";
	
	public static DependPackages:string[] = ["ModuleBag","CommonBase","_ResImageUIV1"];

	
	public static createInstance():GetInformationDialog {
		return <GetInformationDialog><any>(fairygui.UIPackage.createObject("ModuleBag","GetInformationDialog"));
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