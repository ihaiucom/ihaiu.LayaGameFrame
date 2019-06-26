/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import ItemConfigStruct from "../ConfigStructs/ItemConfigStruct";
import AvatarConfig from "./AvatarConfig";
import Game from "../../Game";
import MenuConfig from "./MenuConfig";

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

    private _getWayMenus: MenuConfig[];
    /** 获取所有可以获取的菜单 */
    get getWayMenus(): MenuConfig[]
    {
        if(!this._getWayMenus)
        {
            this._getWayMenus = [];
            for(let menuId of this.get_way)
            {
                let menuConfig = Game.config.menu.getConfig(menuId);
                if(menuConfig)
                    this._getWayMenus.push(menuConfig);
            }
        }
        return this._getWayMenus;
    }

    /** 获取已经开放的可以获取的菜单 */
    getWayMenusForEnable(): MenuConfig[]
    {
        let list = [];
        for(let menuConfig of this.getWayMenus)
        {
            if(menuConfig.isUnlock)
            {
                list.push(menuConfig);
            }
        }
        return list;
    }
}