/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import ItemConfigStruct from "../ConfigStructs/ItemConfigStruct";
import AvatarConfig from "./AvatarConfig";
import Game from "../../Game";

export default class ItemConfig extends ItemConfigStruct
{
	get avatarConfig(): AvatarConfig
    {
        return Game.config.avatar.getConfig(this.icon);
    }

    get iconUrl(): string
    {
        if (this.avatarConfig)
        {
            if (this.type == 7)
            {
                return this.avatarConfig.bodyIconUrl;
            }
            return this.avatarConfig.iconUrl;
        }
        return "";
    }

    /**
     * 物品星级 0,1,2,3,4,5
     */
    get itemStarNum()
    {
        if (this.star == 0)
        {
            return 0;
        }

        let propertyCfg = Game.config.property.getConfig(this.star);
        if (propertyCfg)
        {
            let star = Number(propertyCfg.zh_cn_name);
            if (star == null)
            {
                console.log("Error Item Star");
                return 0;
            }
            star = star < 0 ? 0 : star;
            star = star > 6 ? 6 : star;
            return star;
        }
        return 0;
    }
}