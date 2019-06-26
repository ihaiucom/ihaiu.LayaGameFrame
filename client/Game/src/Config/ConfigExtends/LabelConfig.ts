/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import LabelConfigStruct from "../ConfigStructs/LabelConfigStruct";
import AvatarConfig from "./AvatarConfig";
import Game from "../../Game";

export default class LabelConfig extends LabelConfigStruct
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

    /** 是否是情报标签 */
    get isInformation(): boolean
    {
        let typeConfig = Game.config.labelType.getConfig(this.type);
        if(typeConfig)
        {
            return typeConfig.isIntelligence;
        }
        return false;
    }

    

	get typeName(): string
	{
		let labelTypeConfig = Game.config.labelType.getConfig(this.type);
		return labelTypeConfig ? labelTypeConfig.Name : "";
	}
}