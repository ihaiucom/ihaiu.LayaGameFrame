/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DialogCloseWindow from "../../Extends/GameLaunch/DialogCloseWindow";
import YelloButton from "../../Extends/GameLaunch/YelloButton";
import SystemAlertMessage from "../../Extends/GameLaunch/SystemAlertMessage";

export default class SystemAlertMessageStruct extends fairygui.GComponent
{
	public m_content : fairygui.GRichTextField;
	public m_title : fairygui.GRichTextField;
	public m_dialog : DialogCloseWindow;
	public m_okBtn : YelloButton;

	
	public static URL:string = "ui://47qsdr42nk8t1";
	
	public static DependPackages:string[] = ["GameLaunch"];

	
	public static createInstance():SystemAlertMessage {
		return <SystemAlertMessage><any>(fairygui.UIPackage.createObject("GameLaunch","SystemAlertMessage"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_content = <fairygui.GRichTextField><any>(this.getChild("content"));
		this.m_title = <fairygui.GRichTextField><any>(this.getChild("title"));
		this.m_dialog = <DialogCloseWindow><any>(this.getChild("dialog"));
		this.m_okBtn = <YelloButton><any>(this.getChild("okBtn"));
		
		
	}
}