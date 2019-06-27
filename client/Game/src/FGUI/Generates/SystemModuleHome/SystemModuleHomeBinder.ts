/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import HomeWindowUI from "../../Extends/SystemModuleHome/HomeWindowUI";

export default class SystemModuleHomeBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(HomeWindowUI.URL, HomeWindowUI);
	}
}