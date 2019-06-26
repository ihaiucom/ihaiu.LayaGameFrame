/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RewardItemStruct from "../../Generates/CommonGame/RewardItemStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import TEXT from '../../../Config/Keys/TEXT';

export default class RewardItem extends RewardItemStruct
{
    updateView(data: ItemData) {
        this.icon = data.itemIconUrl;
        this.m_num.text = TEXT.RewardItemCount.format(data.count);
        this.m_itemName.text = data.itemName;
    }
}