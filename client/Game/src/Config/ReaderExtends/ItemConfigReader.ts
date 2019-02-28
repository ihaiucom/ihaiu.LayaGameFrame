/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import ItemConfigReaderStruct from "../ReaderStructs/ItemConfigReaderStruct";
import Dictionary from "../../Libs/Helpers/Dictionary";
import ItemConfig from "../ConfigExtends/ItemConfig";

export default class ItemConfigReader extends ItemConfigReaderStruct
{
    private _dict: Dictionary<number, ItemConfig> = new Dictionary<number, ItemConfig>();

    addConfig(config: ItemConfig)
    {
        super.addConfig(config);

        if (config.actor_id > 0)
        {
            this._dict.add(config.actor_id, config);
        }
    }

    // 根据物品类型获取物品列表		
    getConfigsByType(...itemTypes: number[]): ItemConfig[]
    {
        let list: ItemConfig[] = [];
        let items = this.getConfigList();
        for (let i = 0; i < items.length; i++)
        {
            for (let j = 0; j < itemTypes.length; j++)
            {
                if (items[i].type == itemTypes[j])
                {
                    list.push(items[i]);
                    break;
                }
            }
        }

        return list;
    }
    getType(id: number)
    {
        let cfg = this.getConfig(id);
        if (cfg)
        {
            return cfg.type;
        }
        return null;
    }

    getItemIcon(itemId)
    {
        let cfg = this.getConfig(itemId);
        return cfg.iconUrl;
    }
    getStarNum(itemId)
    {
        let cfg = this.getConfig(itemId);
        return cfg.itemStarNum;
    }

    getItemByActorId(actorId: number): ItemConfig
    {
        return this._dict.getValue(actorId);
    }
}