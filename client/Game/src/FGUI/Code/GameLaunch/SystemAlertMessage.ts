/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import DialogCloseWindow from "./DialogCloseWindow";

export default class SystemAlertMessage extends fairygui.GComponent {

	public _dialog:DialogCloseWindow;
	public _content:fairygui.GRichTextField;
	public _title:fairygui.GRichTextField;
	public _okBtn:fairygui.GButton;

	public static URL:string = "ui://47qsdr42nk8t1";

	public static createInstance():SystemAlertMessage {
		return <SystemAlertMessage><any>(fairygui.UIPackage.createObject("GameLaunch","SystemAlertMessage"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._dialog = <DialogCloseWindow><any>(this.getChildAt(0));
		this._content = <fairygui.GRichTextField><any>(this.getChildAt(1));
		this._title = <fairygui.GRichTextField><any>(this.getChildAt(2));
		this._okBtn = <fairygui.GButton><any>(this.getChildAt(3));
	}
}