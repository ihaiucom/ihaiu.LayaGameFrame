/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LaunchLoaderPanel from "./LaunchLoaderPanel";
import ProgressRedBar from "./ProgressRedBar";
import BarSquare from "./BarSquare";
import DialogCloseWindow from "./DialogCloseWindow";
import CloseButton from "./CloseButton";
import BGModel from "./BGModel";
import WindowModalWaiting from "./WindowModalWaiting";
import GlobalModalWaiting from "./GlobalModalWaiting";
import SystemAlertMessage from "./SystemAlertMessage";
import SystemConfirmMessage from "./SystemConfirmMessage";
import SystemToastMessage from "./SystemToastMessage";

export default class GameLaunchBinder{
	public static bindAll():void {
		fairygui.UIObjectFactory.setPackageItemExtension(LaunchLoaderPanel.URL, LaunchLoaderPanel);
		fairygui.UIObjectFactory.setPackageItemExtension(ProgressRedBar.URL, ProgressRedBar);
		fairygui.UIObjectFactory.setPackageItemExtension(BarSquare.URL, BarSquare);
		fairygui.UIObjectFactory.setPackageItemExtension(DialogCloseWindow.URL, DialogCloseWindow);
		fairygui.UIObjectFactory.setPackageItemExtension(CloseButton.URL, CloseButton);
		fairygui.UIObjectFactory.setPackageItemExtension(BGModel.URL, BGModel);
		fairygui.UIObjectFactory.setPackageItemExtension(WindowModalWaiting.URL, WindowModalWaiting);
		fairygui.UIObjectFactory.setPackageItemExtension(GlobalModalWaiting.URL, GlobalModalWaiting);
		fairygui.UIObjectFactory.setPackageItemExtension(SystemAlertMessage.URL, SystemAlertMessage);
		fairygui.UIObjectFactory.setPackageItemExtension(SystemConfirmMessage.URL, SystemConfirmMessage);
		fairygui.UIObjectFactory.setPackageItemExtension(SystemToastMessage.URL, SystemToastMessage);
	}
}