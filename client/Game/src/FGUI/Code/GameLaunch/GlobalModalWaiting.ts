/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class GlobalModalWaiting extends fairygui.GComponent {

	public __bg_1:fairygui.GImage;
	public __bg_2:fairygui.GImage;
	public _circle:fairygui.GImage;
	public _rotation:fairygui.Transition;

	public static URL:string = "ui://47qsdr42nk8t0";

	public static createInstance():GlobalModalWaiting {
		return <GlobalModalWaiting><any>(fairygui.UIPackage.createObject("GameLaunch","GlobalModalWaiting"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this.__bg_1 = <fairygui.GImage><any>(this.getChildAt(0));
		this.__bg_2 = <fairygui.GImage><any>(this.getChildAt(1));
		this._circle = <fairygui.GImage><any>(this.getChildAt(2));
		this._rotation = this.getTransitionAt(0);
	}
}