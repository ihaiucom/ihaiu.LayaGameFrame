/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ItemIconItemStruct from "../../Generates/CommonGame/ItemIconItemStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';

export default class ItemIconItem extends ItemIconItemStruct
{
    public RenderItem(data: ItemData) {
        this.icon = data.itemIconUrl;
        this.title = data.itemNumTxt; 
        this.star = data.itemStar;
    }

    set star(num: number) {
        this.m_Star.starNum = num;
    }
}