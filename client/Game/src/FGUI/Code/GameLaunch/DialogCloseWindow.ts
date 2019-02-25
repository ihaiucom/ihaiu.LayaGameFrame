/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import CloseButton from "./CloseButton";

export default class DialogCloseWindow extends fairygui.GComponent {

	public _closeButton:CloseButton;

	public static URL:string = "ui://47qsdr42f84sg";

	public static createInstance():DialogCloseWindow {
		return <DialogCloseWindow><any>(fairygui.UIPackage.createObject("GameLaunch","DialogCloseWindow"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._closeButton = <CloseButton><any>(this.getChildAt(1));
	}
}