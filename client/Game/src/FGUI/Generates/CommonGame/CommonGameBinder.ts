/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import ItemIconItem from "../../Extends/CommonGame/ItemIconItem";
import Star from "../../Extends/CommonGame/Star";
import CoinIconItem from "../../Extends/CommonGame/CoinIconItem";
import ItemNumItem from "../../Extends/CommonGame/ItemNumItem";
import SmallIconItem from "../../Extends/CommonGame/SmallIconItem";
import AssetItem from "../../Extends/CommonGame/AssetItem";
import StudioStarList from "../../Extends/CommonGame/StudioStarList";
import UserHeadIcon from "../../Extends/CommonGame/UserHeadIcon";
import RewardItem from "../../Extends/CommonGame/RewardItem";
import PropIconItem from "../../Extends/CommonGame/PropIconItem";
import ItemCostItem from "../../Extends/CommonGame/ItemCostItem";
import TitleBar from "../../Extends/CommonGame/TitleBar";
import RewardNumItem from "../../Extends/CommonGame/RewardNumItem";
import CostItemIcon from "../../Extends/CommonGame/CostItemIcon";

export default class CommonGameBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(ItemIconItem.URL, ItemIconItem);
		bind(Star.URL, Star);
		bind(CoinIconItem.URL, CoinIconItem);
		bind(ItemNumItem.URL, ItemNumItem);
		bind(SmallIconItem.URL, SmallIconItem);
		bind(AssetItem.URL, AssetItem);
		bind(StudioStarList.URL, StudioStarList);
		bind(UserHeadIcon.URL, UserHeadIcon);
		bind(RewardItem.URL, RewardItem);
		bind(PropIconItem.URL, PropIconItem);
		bind(ItemCostItem.URL, ItemCostItem);
		bind(TitleBar.URL, TitleBar);
		bind(RewardNumItem.URL, RewardNumItem);
		bind(CostItemIcon.URL, CostItemIcon);
	}
}