/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Slider_grip from "../../Extends/CommonBase/Slider_grip";
import Slider from "../../Extends/CommonBase/Slider";

export default class SliderStruct extends fairygui.GSlider
{
	public m_bar : fairygui.GImage;
	public m_title : fairygui.GTextField;
	public m_grip : Slider_grip;

	
	public static URL:string = "ui://jaoapdicncg9s";
	
	public static DependPackages:string[] = ["CommonBase","_ResImageUI"];

	
	public static createInstance():Slider {
		return <Slider><any>(fairygui.UIPackage.createObject("CommonBase","Slider"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_bar = <fairygui.GImage><any>(this.getChild("bar"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_grip = <Slider_grip><any>(this.getChild("grip"));
		
		
	}
}