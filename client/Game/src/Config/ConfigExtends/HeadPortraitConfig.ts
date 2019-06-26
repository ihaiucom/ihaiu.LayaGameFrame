/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import HeadPortraitConfigStruct from "../ConfigStructs/HeadPortraitConfigStruct";
import Game from "../../Game";

export default class HeadPortraitConfig extends HeadPortraitConfigStruct
{
	
    get iconUrl(): string
    {
        let avatarConfig = Game.config.avatar.getConfig(this.icon);
        if (avatarConfig)
        {
            return avatarConfig.iconUrl;
        }
    }
}