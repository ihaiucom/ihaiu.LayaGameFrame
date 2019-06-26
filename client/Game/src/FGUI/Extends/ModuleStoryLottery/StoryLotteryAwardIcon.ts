/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryLotteryAwardIconStruct from "../../Generates/ModuleStoryLottery/StoryLotteryAwardIconStruct";
import StorySeriesData from "../../../GameModule/DataStructs/StorySeriesData";
import Game from "../../../Game";

// 剧本招募奖励展示item
export default class StoryLotteryAwardIcon extends StoryLotteryAwardIconStruct
{
    public RenderItem(data: Array<any>) {
        let posterName = data["posterName"]
        let label_star = data["label_star"]
        this.m_icon.url = Game.config.avatar.getConfig(posterName).iconUrl
        this.m_starNum.m_StarNum.selectedIndex = parseInt(Game.config.label.getConfig(label_star).name) - 1
    }
}