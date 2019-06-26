/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioEventCommentPanelStruct from "../../Generates/ModuleStudio/StudioEventCommentPanelStruct";
import StudioEventData from "../../../GameModule/DataStructs/StudioEventData";
import Random from '../../../Libs/Helpers/Random';
import NumberRoller from '../../../Libs/Helpers/NumberRoller';
import Game from "../../../Game";


export default class StudioEventCommentPanel extends StudioEventCommentPanelStruct {
    async updateView(event: StudioEventData) {
        this.m_contentList.updateView(event);
        
        let rollingDuration = Game.constant.studio.RollingDuration;
        let strs: string[] = [];
        for (let i = 0; i < 3; i++)  {
            let tweet = Random.range(10000, 100000) + "";
            strs.push(tweet);
        }
        this.m_tweet.text = strs[0];
        NumberRoller.rolling(this.m_tweet, rollingDuration);
        this.m_comment.text = strs[1];
        NumberRoller.rolling(this.m_comment, rollingDuration);
        this.m_like.text = strs[2];
        NumberRoller.rolling(this.m_like, rollingDuration);
    }

    stopAnimations() {
        this.m_contentList.stopAnimations();
    }
}