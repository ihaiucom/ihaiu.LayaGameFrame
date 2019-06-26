/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RewardNumItemStruct from "../../Generates/CommonGame/RewardNumItemStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import TEXT from "../../../Config/Keys/TEXT";

export default class RewardNumItem extends RewardNumItemStruct
{
    updateView(data: ItemData) {
        this.icon = data.itemIconUrl;
        this.m_num.text = TEXT.RewardItemCount.format(data.count);
    }
}