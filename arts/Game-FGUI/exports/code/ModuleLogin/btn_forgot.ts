/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class btn_forgot extends fairygui.GButton {

	public _Title:fairygui.GTextField;

	public static URL:string = "ui://4698ugpknz0c1r";

	public static createInstance():btn_forgot {
		return <btn_forgot><any>(fairygui.UIPackage.createObject("ModuleLogin","btn_forgot"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._Title = <fairygui.GTextField><any>(this.getChildAt(0));
	}
}