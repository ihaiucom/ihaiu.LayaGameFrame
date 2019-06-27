/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import MenuBarMain from "../../Extends/SystemModuleMenu/MenuBarMain";
import MenuBMainButton from "../../Extends/SystemModuleMenu/MenuBMainButton";
import MenuBButton from "../../Extends/SystemModuleMenu/MenuBButton";
import MenuTimeButton from "../../Extends/SystemModuleMenu/MenuTimeButton";
import MenuTime from "../../Extends/SystemModuleMenu/MenuTime";
import MenuBarRightBottom from "../../Extends/SystemModuleMenu/MenuBarRightBottom";
import MenuRButton from "../../Extends/SystemModuleMenu/MenuRButton";
import TopMainBar from "../../Extends/SystemModuleMenu/TopMainBar";
import TopHeadInfo from "../../Extends/SystemModuleMenu/TopHeadInfo";
import TopHeadIcon from "../../Extends/SystemModuleMenu/TopHeadIcon";
import TopHeadIconMask from "../../Extends/SystemModuleMenu/TopHeadIconMask";
import TopStreet from "../../Extends/SystemModuleMenu/TopStreet";
import TopMoneyMainBar from "../../Extends/SystemModuleMenu/TopMoneyMainBar";
import TopMoneyItem from "../../Extends/SystemModuleMenu/TopMoneyItem";
import MenuBarRightTop from "../../Extends/SystemModuleMenu/MenuBarRightTop";
import MenuAppointmentButton from "../../Extends/SystemModuleMenu/MenuAppointmentButton";

export default class SystemModuleMenuBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(MenuBarMain.URL, MenuBarMain);
		bind(MenuBMainButton.URL, MenuBMainButton);
		bind(MenuBButton.URL, MenuBButton);
		bind(MenuTimeButton.URL, MenuTimeButton);
		bind(MenuTime.URL, MenuTime);
		bind(MenuBarRightBottom.URL, MenuBarRightBottom);
		bind(MenuRButton.URL, MenuRButton);
		bind(TopMainBar.URL, TopMainBar);
		bind(TopHeadInfo.URL, TopHeadInfo);
		bind(TopHeadIcon.URL, TopHeadIcon);
		bind(TopHeadIconMask.URL, TopHeadIconMask);
		bind(TopStreet.URL, TopStreet);
		bind(TopMoneyMainBar.URL, TopMoneyMainBar);
		bind(TopMoneyItem.URL, TopMoneyItem);
		bind(MenuBarRightTop.URL, MenuBarRightTop);
		bind(MenuAppointmentButton.URL, MenuAppointmentButton);
	}
}