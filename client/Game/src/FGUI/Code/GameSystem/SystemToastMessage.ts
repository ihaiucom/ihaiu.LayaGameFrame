/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class SystemToastMessage extends fairygui.GComponent {

	public _title:fairygui.GRichTextField;

	public static URL:string = "ui://43jt54bpnk8t3";

	public static createInstance():SystemToastMessage {
		return <SystemToastMessage><any>(fairygui.UIPackage.createObject("GameSystem","SystemToastMessage"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._title = <fairygui.GRichTextField><any>(this.getChildAt(1));
	}
}