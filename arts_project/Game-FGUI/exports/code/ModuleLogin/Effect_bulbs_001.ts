/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Effect_bulbs_001 extends fairygui.GComponent {

	public _t033333:fairygui.Transition;

	public static URL:string = "ui://4698ugpknz0c27";

	public static createInstance():Effect_bulbs_001 {
		return <Effect_bulbs_001><any>(fairygui.UIPackage.createObject("ModuleLogin","Effect_bulbs_001"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._t033333 = this.getTransitionAt(0);
	}
}