/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LoginWindowUI from "./LoginWindowUI";
import LoginPanel from "./LoginPanel";
import AccountInput from "./AccountInput";
import AccountComboBox from "./AccountComboBox";
import passwordInput from "./passwordInput";
import btn_forgot from "./btn_forgot";
import RegisterPanel from "./RegisterPanel";
import GuestPanel from "./GuestPanel";
import Effect_bulbs_001 from "./Effect_bulbs_001";
import Effect_FxPicRollLogin from "./Effect_FxPicRollLogin";

export default class ModuleLoginBinder{
	public static bindAll():void {
		fairygui.UIObjectFactory.setPackageItemExtension(LoginWindowUI.URL, LoginWindowUI);
		fairygui.UIObjectFactory.setPackageItemExtension(LoginPanel.URL, LoginPanel);
		fairygui.UIObjectFactory.setPackageItemExtension(AccountInput.URL, AccountInput);
		fairygui.UIObjectFactory.setPackageItemExtension(AccountComboBox.URL, AccountComboBox);
		fairygui.UIObjectFactory.setPackageItemExtension(passwordInput.URL, passwordInput);
		fairygui.UIObjectFactory.setPackageItemExtension(btn_forgot.URL, btn_forgot);
		fairygui.UIObjectFactory.setPackageItemExtension(RegisterPanel.URL, RegisterPanel);
		fairygui.UIObjectFactory.setPackageItemExtension(GuestPanel.URL, GuestPanel);
		fairygui.UIObjectFactory.setPackageItemExtension(Effect_bulbs_001.URL, Effect_bulbs_001);
		fairygui.UIObjectFactory.setPackageItemExtension(Effect_FxPicRollLogin.URL, Effect_FxPicRollLogin);
	}
}