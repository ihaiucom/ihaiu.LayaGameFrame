/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import PropertyConfigStruct from "../ConfigStructs/PropertyConfigStruct";
import AvatarConfig from "./AvatarConfig";
import Game from "../../Game";
import PropHelper from "../../GameFrame/Props/PropHelper";

export default class PropertyConfig extends PropertyConfigStruct
{
	get iconAvatar(): AvatarConfig
    {
        if(this.icon > 0)
            return Game.config.avatar.getConfig(this.icon);
        return null;
    }

    get iconUrl(): string
    {
        if(this.icon > 0)
            return this.iconAvatar.iconUrl;

        return "";
    }

    getPropertyByField(field: string): PropertyConfig{
        let id = PropHelper.GetPropId(field);
        let config = Game.config.property.getConfig(id);

        return config;
    }
}