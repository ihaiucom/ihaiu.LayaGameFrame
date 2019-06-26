/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LoginPanel from "./LoginPanel";
import GuestPanel from "./GuestPanel";
import RegisterPanel from "./RegisterPanel";

export default class LoginWindowUI extends fairygui.GComponent {

	public _TabCtrl:fairygui.Controller;
	public _screenBG:fairygui.GLabel;
	public _txt_resVer:fairygui.GTextField;
	public _txt_gamever:fairygui.GTextField;
	public _loginPanel:LoginPanel;
	public _guestPanel:GuestPanel;
	public _registerPanel:RegisterPanel;
	public _btn_onRegister:fairygui.GButton;

	public static URL:string = "ui://4698ugpknz0c0";

	public static createInstance():LoginWindowUI {
		return <LoginWindowUI><any>(fairygui.UIPackage.createObject("ModuleLogin","LoginWindowUI"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._TabCtrl = this.getControllerAt(0);
		this._screenBG = <fairygui.GLabel><any>(this.getChildAt(0));
		this._txt_resVer = <fairygui.GTextField><any>(this.getChildAt(3));
		this._txt_gamever = <fairygui.GTextField><any>(this.getChildAt(4));
		this._loginPanel = <LoginPanel><any>(this.getChildAt(5));
		this._guestPanel = <GuestPanel><any>(this.getChildAt(6));
		this._registerPanel = <RegisterPanel><any>(this.getChildAt(7));
		this._btn_onRegister = <fairygui.GButton><any>(this.getChildAt(8));
	}
}