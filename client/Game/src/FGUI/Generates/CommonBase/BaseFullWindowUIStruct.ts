/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CloseButton from "../../Extends/CommonBase/CloseButton";
import BaseFullWindowUI from "../../Extends/CommonBase/BaseFullWindowUI";

export default class BaseFullWindowUIStruct extends fairygui.GLabel
{
	public m_icon : fairygui.GLoader;
	public m_closeBtn : CloseButton;

	
	public static URL:string = "ui://jaoapdiceftvc";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUIV1"];

	
	public static createInstance():BaseFullWindowUI {
		return <BaseFullWindowUI><any>(fairygui.UIPackage.createObject("CommonBase","BaseFullWindowUI"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		this.m_closeBtn = <CloseButton><any>(this.getChild("closeBtn"));
		
		
	}
}