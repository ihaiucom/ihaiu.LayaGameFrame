/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagActorItemStruct from "../../Generates/ModuleBag/BagActorItemStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import Game from '../../../Game';

export default class BagActorItem extends BagActorItemStruct
{
    public RenderItem(data: ItemData)
    {
        this.icon = data.itemIconUrl;
        this.text = data.itemNumTxt; // Math.min(data.itemNum, 9999).toString();
        this.star = data.itemStar;

        let actorId = data.itemConfig.actor_id;
        let actorNum = data.itemConfig.actor_num;
        // let actor = Game.moduleModel.getActor(actorId);

        // if (actor)
        // {
        //     this.m_state.setSelectedIndex(1);
        // } else
        // {
        //     if (actorNum <= data.itemNum)
        //     {
        //         this.m_state.setSelectedIndex(2);
        //     } else
        //     {
        //         this.m_state.setSelectedIndex(0);
        //     }
        // }
    }

    set star(num: number)
    {
        // this.m_item.m_star.starNum = num;
    }
}