/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import AccountComboBox from "./AccountComboBox";

export default class AccountInput extends fairygui.GComponent {

	public _accountComboBox:AccountComboBox;
	public _txt_account:fairygui.GTextInput;
	public _button:fairygui.GButton;

	public static URL:string = "ui://4698ugpknz0c1h";

	public static createInstance():AccountInput {
		return <AccountInput><any>(fairygui.UIPackage.createObject("ModuleLogin","AccountInput"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._accountComboBox = <AccountComboBox><any>(this.getChildAt(0));
		this._txt_account = <fairygui.GTextInput><any>(this.getChildAt(1));
		this._button = <fairygui.GButton><any>(this.getChildAt(2));
	}
}