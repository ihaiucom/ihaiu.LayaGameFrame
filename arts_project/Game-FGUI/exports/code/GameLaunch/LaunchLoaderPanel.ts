/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import ProgressRedBar from "./ProgressRedBar";

export default class LaunchLoaderPanel extends fairygui.GComponent {

	public _screenBG:fairygui.GLabel;
	public _progressBar:ProgressRedBar;
	public _title:fairygui.GTextField;
	public _help:fairygui.GTextField;
	public _txt_resVer:fairygui.GTextField;
	public _txt_gamever:fairygui.GTextField;

	public static URL:string = "ui://47qsdr42f84s0";

	public static createInstance():LaunchLoaderPanel {
		return <LaunchLoaderPanel><any>(fairygui.UIPackage.createObject("GameLaunch","LaunchLoaderPanel"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._screenBG = <fairygui.GLabel><any>(this.getChildAt(0));
		this._progressBar = <ProgressRedBar><any>(this.getChildAt(1));
		this._title = <fairygui.GTextField><any>(this.getChildAt(2));
		this._help = <fairygui.GTextField><any>(this.getChildAt(3));
		this._txt_resVer = <fairygui.GTextField><any>(this.getChildAt(4));
		this._txt_gamever = <fairygui.GTextField><any>(this.getChildAt(5));
	}
}