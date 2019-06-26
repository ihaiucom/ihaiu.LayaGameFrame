/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SmallIconItemStruct from "../../Generates/CommonGame/SmallIconItemStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';

export default class SmallIconItem extends SmallIconItemStruct
{
    public RenderItem(data: ItemData) {
        this.icon = data.itemIconUrl;
        this.title = data.itemNumTxt; 
        this.star = data.itemStar;
    }

    set star(num: number) {
        this.m_star.starNum = num;
    }
}