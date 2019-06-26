/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class CloseButton extends fairygui.GButton {

	public _closeBtn:fairygui.GImage;

	public static URL:string = "ui://47qsdr42f84sj";

	public static createInstance():CloseButton {
		return <CloseButton><any>(fairygui.UIPackage.createObject("GameLaunch","CloseButton"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._closeBtn = <fairygui.GImage><any>(this.getChildAt(1));
	}
}