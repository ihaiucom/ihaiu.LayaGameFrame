/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagItemStruct from "../../Generates/ModuleBag/BagItemStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';

export default class BagItem extends BagItemStruct {
    public RenderItem(data: ItemData) {
        this.icon = data.itemIconUrl;
        this.text = data.itemNumTxt; 
        this.star = data.itemStar;
    }

    set star(num: number) {
        this.m_item.m_Star.starNum = num;
    }
}