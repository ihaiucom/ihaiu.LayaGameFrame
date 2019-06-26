/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemCostItemStruct from "../../Generates/CommonGame/ItemCostItemStruct";
import DTFixItemNum from "../../../Config/ConfigExtends/DTFixItemNum";
import Game from "../../../Game";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class ItemCostItem extends ItemCostItemStruct
{
    public RenderItem(data: DTFixItemNum): boolean {
        let allnum: number = Game.moduleModel.item.getItemNum(data.itemId); 
        let nownum: number = data.itemNum; 

        //图标
        this.m_icon.url    = ItemData.GetIconUrl(data.itemId);
        //所需数量
        this.m_labNum.text = String(nownum);
        this.m_enough.selectedIndex = allnum >= nownum ? 1 : 0;

        return allnum >= nownum;
    }
}