/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagInfoIconItemStruct from "../../Generates/ModuleBag/BagInfoIconItemStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import DTItemNum from '../../../Config/ConfigExtends/DTItemNum';
import Game from '../../../Game';
import TEXT from '../../../Config/Keys/TEXT';

export default class BagInfoIconItem extends BagInfoIconItemStruct {

    private itemData: ItemData;
    private GetItems: DTItemNum[] = [];

    public UpdateView(id: number) {
        this.itemData = Game.moduleModel.item.getItem(id);
        if (this.itemData.itemType == 7) {
        } else {
            this.m_item.RenderItem(this.itemData);
            this.m_itemName.text = this.itemData.itemName;
            this.m_itemContent.text = this.itemData.itemDes;
        }
    }

}