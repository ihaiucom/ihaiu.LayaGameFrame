/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class BGModel extends fairygui.GComponent {

	public _bg:fairygui.GImage;

	public static URL:string = "ui://47qsdr42f84so";

	public static createInstance():BGModel {
		return <BGModel><any>(fairygui.UIPackage.createObject("GameLaunch","BGModel"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._bg = <fairygui.GImage><any>(this.getChildAt(0));
	}
}