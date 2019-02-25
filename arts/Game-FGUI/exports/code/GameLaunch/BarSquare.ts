/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class BarSquare extends fairygui.GComponent {

	public _t1:fairygui.Transition;

	public static URL:string = "ui://47qsdr42f84s6";

	public static createInstance():BarSquare {
		return <BarSquare><any>(fairygui.UIPackage.createObject("GameLaunch","BarSquare"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._t1 = this.getTransitionAt(0);
	}
}