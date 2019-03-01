/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import LoginWindowUI from "../../Extends/ModuleLogin/LoginWindowUI";
import LoginPanel from "../../Extends/ModuleLogin/LoginPanel";
import AccountInput from "../../Extends/ModuleLogin/AccountInput";
import PasswordInput from "../../Extends/ModuleLogin/PasswordInput";
import RegisterPanel from "../../Extends/ModuleLogin/RegisterPanel";
import GuestPanel from "../../Extends/ModuleLogin/GuestPanel";

export default class ModuleLoginBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(LoginWindowUI.URL, LoginWindowUI);
		bind(LoginPanel.URL, LoginPanel);
		bind(AccountInput.URL, AccountInput);
		bind(PasswordInput.URL, PasswordInput);
		bind(RegisterPanel.URL, RegisterPanel);
		bind(GuestPanel.URL, GuestPanel);
	}
}