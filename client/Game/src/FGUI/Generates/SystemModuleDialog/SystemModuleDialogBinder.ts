/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import AlertDialogBackground from "../../Extends/SystemModuleDialog/AlertDialogBackground";
import SetNumberDialog from "../../Extends/SystemModuleDialog/SetNumberDialog";
import BaseAlertDialog from "../../Extends/SystemModuleDialog/BaseAlertDialog";
import SelectRecipientDialog from "../../Extends/SystemModuleDialog/SelectRecipientDialog";
import TextScroll from "../../Extends/SystemModuleDialog/TextScroll";
import MailContentDialog from "../../Extends/SystemModuleDialog/MailContentDialog";
import GetRewardDialog from "../../Extends/SystemModuleDialog/GetRewardDialog";
import ItemInfoDialog from "../../Extends/SystemModuleDialog/ItemInfoDialog";
import AlertDialogBackground2 from "../../Extends/SystemModuleDialog/AlertDialogBackground2";
import ItemGetWayDialog from "../../Extends/SystemModuleDialog/ItemGetWayDialog";
import ItemGetRewardDialogContent from "../../Extends/SystemModuleDialog/ItemGetRewardDialogContent";

export default class SystemModuleDialogBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(AlertDialogBackground.URL, AlertDialogBackground);
		bind(SetNumberDialog.URL, SetNumberDialog);
		bind(BaseAlertDialog.URL, BaseAlertDialog);
		bind(SelectRecipientDialog.URL, SelectRecipientDialog);
		bind(TextScroll.URL, TextScroll);
		bind(MailContentDialog.URL, MailContentDialog);
		bind(GetRewardDialog.URL, GetRewardDialog);
		bind(ItemInfoDialog.URL, ItemInfoDialog);
		bind(AlertDialogBackground2.URL, AlertDialogBackground2);
		bind(ItemGetWayDialog.URL, ItemGetWayDialog);
		bind(ItemGetRewardDialogContent.URL, ItemGetRewardDialogContent);
	}
}