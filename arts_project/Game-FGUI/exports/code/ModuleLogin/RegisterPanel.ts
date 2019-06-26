/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import AccountInput from "./AccountInput";
import passwordInput from "./passwordInput";

export default class RegisterPanel extends fairygui.GComponent {

	public _accountInput:AccountInput;
	public _passwordInput:passwordInput;
	public _btn_onRegister:fairygui.GButton;
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

		this._accountInput = <AccountInput><any>(this.getChildAt(0));
		this._passwordInput = <passwordInput><any>(this.getChildAt(1));
		this._btn_onRegister = <fairygui.GButton><any>(this.getChildAt(2));
		this._btn_registerback = <fairygui.GButton><any>(this.getChildAt(3));
	}
}