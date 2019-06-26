/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class AccountComboBox extends fairygui.GComboBox {

	public _c1:fairygui.Controller;
	public _button:fairygui.GButton;

	public static URL:string = "ui://4698ugpknz0c1i";

	public static createInstance():AccountComboBox {
		return <AccountComboBox><any>(fairygui.UIPackage.createObject("ModuleLogin","AccountComboBox"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._c1 = this.getControllerAt(0);
		this._button = <fairygui.GButton><any>(this.getChildAt(2));
	}
}