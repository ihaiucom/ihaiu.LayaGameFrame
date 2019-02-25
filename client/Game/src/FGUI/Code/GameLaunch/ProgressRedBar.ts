/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import BarSquare from "./BarSquare";

export default class ProgressRedBar extends fairygui.GProgressBar {

	public _barSquare:BarSquare;
	public _top:fairygui.GImage;

	public static URL:string = "ui://47qsdr42f84s3";

	public static createInstance():ProgressRedBar {
		return <ProgressRedBar><any>(fairygui.UIPackage.createObject("GameLaunch","ProgressRedBar"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._barSquare = <BarSquare><any>(this.getChildAt(2));
		this._top = <fairygui.GImage><any>(this.getChildAt(3));
	}
}