/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import DialogCloseWindow from "./DialogCloseWindow";

export default class SystemConfirmMessage extends fairygui.GComponent {

	public _dialog:DialogCloseWindow;
	public _content:fairygui.GRichTextField;
	public _title:fairygui.GRichTextField;
	public _okBtn:fairygui.GButton;
	public _cancleBtn:fairygui.GButton;

	public static URL:string = "ui://47qsdr42nk8t2";

	public static createInstance():SystemConfirmMessage {
		return <SystemConfirmMessage><any>(fairygui.UIPackage.createObject("GameLaunch","SystemConfirmMessage"));
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
		this._cancleBtn = <fairygui.GButton><any>(this.getChildAt(4));
	}
}