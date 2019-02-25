/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import WindowModalWaiting from "./WindowModalWaiting";
import DialogCloseWindow from "./DialogCloseWindow";
import CloseButton from "./CloseButton";
import BGModel from "./BGModel";
import GlobalModalWaiting from "./GlobalModalWaiting";
import SystemAlertMessage from "./SystemAlertMessage";
import SystemConfirmMessage from "./SystemConfirmMessage";
import SystemToastMessage from "./SystemToastMessage";

export default class GameSystemBinder{
	public static bindAll():void {
		fairygui.UIObjectFactory.setPackageItemExtension(WindowModalWaiting.URL, WindowModalWaiting);
		fairygui.UIObjectFactory.setPackageItemExtension(DialogCloseWindow.URL, DialogCloseWindow);
		fairygui.UIObjectFactory.setPackageItemExtension(CloseButton.URL, CloseButton);
		fairygui.UIObjectFactory.setPackageItemExtension(BGModel.URL, BGModel);
		fairygui.UIObjectFactory.setPackageItemExtension(GlobalModalWaiting.URL, GlobalModalWaiting);
		fairygui.UIObjectFactory.setPackageItemExtension(SystemAlertMessage.URL, SystemAlertMessage);
		fairygui.UIObjectFactory.setPackageItemExtension(SystemConfirmMessage.URL, SystemConfirmMessage);
		fairygui.UIObjectFactory.setPackageItemExtension(SystemToastMessage.URL, SystemToastMessage);
	}
}