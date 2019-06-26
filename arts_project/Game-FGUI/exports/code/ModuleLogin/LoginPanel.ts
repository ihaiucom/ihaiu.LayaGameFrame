/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import AccountInput from "./AccountInput";
import passwordInput from "./passwordInput";
import btn_forgot from "./btn_forgot";

export default class LoginPanel extends fairygui.GComponent {

	public _c1:fairygui.Controller;
	public _accountInput:AccountInput;
	public _passwordInput:passwordInput;
	public _btn_forgot:btn_forgot;
	public _btn_security:fairygui.GButton;
	public _btn_login:fairygui.GButton;
	public _btn_register:fairygui.GButton;
	public _btn_guest:fairygui.GButton;

	public static URL:string = "ui://4698ugpknz0c1g";

	public static createInstance():LoginPanel {
		return <LoginPanel><any>(fairygui.UIPackage.createObject("ModuleLogin","LoginPanel"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._c1 = this.getControllerAt(0);
		this._accountInput = <AccountInput><any>(this.getChildAt(0));
		this._passwordInput = <passwordInput><any>(this.getChildAt(1));
		this._btn_forgot = <btn_forgot><any>(this.getChildAt(2));
		this._btn_security = <fairygui.GButton><any>(this.getChildAt(3));
		this._btn_login = <fairygui.GButton><any>(this.getChildAt(4));
		this._btn_register = <fairygui.GButton><any>(this.getChildAt(5));
		this._btn_guest = <fairygui.GButton><any>(this.getChildAt(6));
	}
}