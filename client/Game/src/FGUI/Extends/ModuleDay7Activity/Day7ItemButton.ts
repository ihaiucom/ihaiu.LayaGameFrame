/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Day7ItemButtonStruct from "../../Generates/ModuleDay7Activity/Day7ItemButtonStruct";
import CountActivitiesData from "../../../GameModule/DataStructs/CountActivitiesData";
import Game from "../../../Game";
import { ItemType } from "../../../GameModule/DataEnums/ItemType";

export default class Day7ItemButton extends Day7ItemButtonStruct
{
    private _index: number;
    protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		this.onClick(this, this.showInfo);
    }
    
    showInfo()
    {

    }

    renderItem(index: number, data: CountActivitiesData)
    {
        this._index = index;
        let reward = data.getReward().config.fixedItems[0];
        if (reward.itemType == ItemType.actor) {
            let config = Game.config.avatar.getConfig(reward.itemId);
            this.m_icon.url = config.iconUrl;
            this.m_labNum.text = "";
        } else {
            let config = Game.config.item.getConfig(reward.itemId);
            this.m_icon.url = config.iconUrl;
            this.m_labNum.text = "x" + reward.itemNum;
        }
    }

    stateIndex(currentIndex: number, alreadyIndex: number)
    {
        this.m_labState.visible = this._index + 1 <= alreadyIndex;

        if (this._index + 1 > alreadyIndex && this._index + 1 <= currentIndex) {
            this.m_title.text = "可领取";
        } else {
            this.m_title.text = (this._index + 1) + "天";
        }
    }
}