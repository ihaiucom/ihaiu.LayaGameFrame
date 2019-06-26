/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryLotteryAwardViewStruct from "../../Generates/ModuleStoryLottery/StoryLotteryAwardViewStruct";
import Game from "../../../Game";
import { ItemType } from "../../../GameModule/DataEnums/ItemType";

export default class StoryLotteryAwardView extends StoryLotteryAwardViewStruct
{
    awardState = 1;
    awardData = [];

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
    }

    updateView( data ): void{
        this.awardData = data;
        this.awardState = data.storyExtractState;

        for ( let d of data.items ){
            if ( d.type == ItemType.story ){
                let baseData = Game.config.storySeries.getConfig( d.id );
                let storyIDs = baseData.storyID;
                let itemID = storyIDs[0];
                let storyData = Game.config.story.getConfig( itemID )
            
                this.m_labType.text = Game.config.label.getConfig(storyData.label_storyType).name;
                this.m_labName.text = storyData.storyName
                this.m_labDesc.text = storyData.introduction
                this.m_icon.m_icon.url =  Game.config.avatar.getConfig(storyData.posterName).iconUrl
                this.m_icon.m_starNum.m_StarNum.selectedIndex = parseInt(Game.config.label.getConfig(storyData.label_star).name) - 1
                return;
            }
        }        
    }
}