/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CostItemIconStruct from "../../Generates/CommonGame/CostItemIconStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class CostItemIcon extends CostItemIconStruct
{
    
    setData(itemData: ItemData, costNum?: number)
    {
        this.m_icon.url = itemData.itemIconUrl;
        this.m_itemName.text = itemData.itemName;

        if(costNum && costNum > 0)
        {
            this.m_num.text = costNum + "/" + itemData.itemNumTxt;
            if(costNum <= itemData.count)
            {
                this.m_countState.selectedIndex = 0;
            }
            else
            {
                this.m_countState.selectedIndex = 1;
            }
        }
        else
        {
            this.m_num.text = itemData.itemNumTxt;
        }
    }
}