/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import LaunchLoaderPanel from "../../Extends/GameLaunch/LaunchLoaderPanel";
import ScreenBG from "../../Extends/GameLaunch/ScreenBG";
import DialogCloseWindow from "../../Extends/GameLaunch/DialogCloseWindow";
import BGModel from "../../Extends/GameLaunch/BGModel";
import GlobalModalWaiting from "../../Extends/GameLaunch/GlobalModalWaiting";
import SystemAlertMessage from "../../Extends/GameLaunch/SystemAlertMessage";
import SystemConfirmMessage from "../../Extends/GameLaunch/SystemConfirmMessage";
import SystemToastMessage from "../../Extends/GameLaunch/SystemToastMessage";
import WindowModalWaiting from "../../Extends/GameLaunch/WindowModalWaiting";

export default class GameLaunchBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(LaunchLoaderPanel.URL, LaunchLoaderPanel);
		bind(ScreenBG.URL, ScreenBG);
		bind(DialogCloseWindow.URL, DialogCloseWindow);
		bind(BGModel.URL, BGModel);
		bind(GlobalModalWaiting.URL, GlobalModalWaiting);
		bind(SystemAlertMessage.URL, SystemAlertMessage);
		bind(SystemConfirmMessage.URL, SystemConfirmMessage);
		bind(SystemToastMessage.URL, SystemToastMessage);
		bind(WindowModalWaiting.URL, WindowModalWaiting);
	}
}