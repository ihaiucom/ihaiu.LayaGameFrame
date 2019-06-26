/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryLotteryFaildViewStruct from "../../Generates/ModuleStoryLottery/StoryLotteryFaildViewStruct";
import Game from "../../../Game";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import MsgKey from "../../../Config/Keys/MsgKey";
import TEXT from "../../../Config/Keys/TEXT";
import { EItemId } from "../../../GameModule/DataEnums/ItemType";

export default class StoryLotteryFaildView extends StoryLotteryFaildViewStruct
{
    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
    }

    updateView( data ): void{
        let items = data.items
        for ( let d of data.items ){
            if ( d.type == EItemId.gold ){
                let item: ItemData = Game.moduleModel.item.getItem( d.id )
                this.m_costNum.text = "X" + d["count"];
                this.m_costName.text = item.itemName;
                this.m_labDesc.text = TEXT.StoryLotteryFiald;
                this.m_costIcon.url = item.itemIconUrl;
                return;
            }
        }   
        
        
    }

}