/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import ActorConfigStruct from "../ConfigStructs/ActorConfigStruct";
import PropList from "../../GameFrame/Props/PropList";
import PropField from "../../GameFrame/Props/PropField";
import LabelList from "../../GameFrame/PropLabels/LabelList";
import AvatarConfig from "./AvatarConfig";
import Game from "../../Game";

export default class ActorConfig extends ActorConfigStruct
{
    labelList = new LabelList();
    propList = new PropList();

    get avatarConfig(): AvatarConfig
    {
        return Game.config.avatar.getConfig(this.avatar);
    }

    // 全身像
    get bodyIconUrl(): string
    {
        if(this.avatarConfig)
        {
            return this.avatarConfig.bodyIconUrl;
        }
        return "";
    }

    // 半身像
    get halfIconUrl(): string
    {
        if(this.avatarConfig)
        {
            return this.avatarConfig.bodyIconUrl;
        }
        return "";
    }

    // 小图标
    get iconUrl(): string
    {
        
        if(this.avatarConfig)
        {
            return this.avatarConfig.iconUrl;
        }
        return "";
    }
}