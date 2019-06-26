/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import DailytaskrewardConfigStruct from "../ConfigStructs/DailytaskrewardConfigStruct";
import Game from '../../Game';

export default class DailytaskrewardConfig extends DailytaskrewardConfigStruct
{
    get rewardIconUrl(): string
    {
        let avatarConfig = Game.config.avatar.getConfig(this.reward_icon);
        if(avatarConfig)
            return avatarConfig.iconUrl;
        return "";
    }

    get receivedRewardIconUrl(): string
    {
        let avatarConfig = Game.config.avatar.getConfig(this.reward_icon_received);
        if(avatarConfig)
            return avatarConfig.iconUrl;
        return "";
    }
}