/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import MailWindowUI from "../../Extends/ModuleEmail/MailWindowUI";
import MailItem from "../../Extends/ModuleEmail/MailItem";
import MailLoader from "../../Extends/ModuleEmail/MailLoader";

export default class ModuleEmailBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(MailWindowUI.URL, MailWindowUI);
		bind(MailItem.URL, MailItem);
		bind(MailLoader.URL, MailLoader);
	}
}