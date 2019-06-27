/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import BagWindowUI from "../../Extends/ModuleBag/BagWindowUI";
import BagInfoIconItem from "../../Extends/ModuleBag/BagInfoIconItem";
import BagItem from "../../Extends/ModuleBag/BagItem";
import BagActorItem from "../../Extends/ModuleBag/BagActorItem";
import GetInformationDialog from "../../Extends/ModuleBag/GetInformationDialog";

export default class ModuleBagBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(BagWindowUI.URL, BagWindowUI);
		bind(BagInfoIconItem.URL, BagInfoIconItem);
		bind(BagItem.URL, BagItem);
		bind(BagActorItem.URL, BagActorItem);
		bind(GetInformationDialog.URL, GetInformationDialog);
	}
}