/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class SystemToastMessage extends fairygui.GComponent {

	public _title:fairygui.GTextField;

	public static URL:string = "ui://47qsdr42nk8t3";

	public static createInstance():SystemToastMessage {
		return <SystemToastMessage><any>(fairygui.UIPackage.createObject("GameLaunch","SystemToastMessage"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._title = <fairygui.GTextField><any>(this.getChildAt(2));
	}
}