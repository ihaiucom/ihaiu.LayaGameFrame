/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class GuestPanel extends fairygui.GComponent {

	public _btn_guestlogin:fairygui.GButton;
	public _btn_linkaccount:fairygui.GButton;
	public _btn_back:fairygui.GButton;
	public _g_guestlogin:fairygui.GGroup;

	public static URL:string = "ui://4698ugpknz0c24";

	public static createInstance():GuestPanel {
		return <GuestPanel><any>(fairygui.UIPackage.createObject("ModuleLogin","GuestPanel"));
	}

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

		this._btn_guestlogin = <fairygui.GButton><any>(this.getChildAt(1));
		this._btn_linkaccount = <fairygui.GButton><any>(this.getChildAt(2));
		this._btn_back = <fairygui.GButton><any>(this.getChildAt(3));
		this._g_guestlogin = <fairygui.GGroup><any>(this.getChildAt(4));
	}
}