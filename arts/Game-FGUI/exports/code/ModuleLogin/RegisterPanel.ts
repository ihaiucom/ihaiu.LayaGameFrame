/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import AccountInput from "./AccountInput";
import passwordInput from "./passwordInput";

export default class RegisterPanel extends fairygui.GComponent {

	public _c1:fairygui.Controller;
	public _accountInput:AccountInput;
	public _passwordInput:passwordInput;
	public _btn_onRegister:fairygui.GButton;
	public _lb_agreement:fairygui.GComponent;
	public _btn_registerback:fairygui.GButton;

	public static URL:string = "ui://4698ugpknz0c1z";

	public static createInstance():RegisterPanel {
		return <RegisterPanel><any>(fairygui.UIPackage.createObject("ModuleLogin","RegisterPanel"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._c1 = this.getControllerAt(0);
		this._accountInput = <AccountInput><any>(this.getChildAt(0));
		this._passwordInput = <passwordInput><any>(this.getChildAt(1));
		this._btn_onRegister = <fairygui.GButton><any>(this.getChildAt(2));
		this._lb_agreement = <fairygui.GComponent><any>(this.getChildAt(3));
		this._btn_registerback = <fairygui.GButton><any>(this.getChildAt(4));
	}
}