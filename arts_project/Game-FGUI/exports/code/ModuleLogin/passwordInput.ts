/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class passwordInput extends fairygui.GComponent {

	public _txt_password:fairygui.GTextInput;
	public _btn_pwdeye:fairygui.GButton;

	public static URL:string = "ui://4698ugpknz0c1n";

	public static createInstance():passwordInput {
		return <passwordInput><any>(fairygui.UIPackage.createObject("ModuleLogin","passwordInput"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._txt_password = <fairygui.GTextInput><any>(this.getChildAt(2));
		this._btn_pwdeye = <fairygui.GButton><any>(this.getChildAt(3));
	}
}