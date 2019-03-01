/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class Effect_FxPicRollLogin extends fairygui.GComponent {

	public _t0:fairygui.Transition;

	public static URL:string = "ui://4698ugpknz0c28";

	public static createInstance():Effect_FxPicRollLogin {
		return <Effect_FxPicRollLogin><any>(fairygui.UIPackage.createObject("ModuleLogin","Effect_FxPicRollLogin"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._t0 = this.getTransitionAt(0);
	}
}