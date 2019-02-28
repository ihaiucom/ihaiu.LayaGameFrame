/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import GlobalConfigReaderStruct from "../ReaderStructs/GlobalConfigReaderStruct";
import Dictionary from "../../Libs/Helpers/Dictionary";
import GlobalConfig from "../ConfigExtends/GlobalConfig";
import Game from "../../Game";
import GlobalKey from "../Keys/GlobalKey";

export default class GlobalConfigReader extends GlobalConfigReaderStruct
{
    // 配置字典
    configsByKey: Dictionary<TKey, GlobalConfig> = new Dictionary<TKey, GlobalConfig>();

    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configs.getValues();
        for (let i = 0; i < list.length; i++)
        {
            let key: TKey = list[i].key;
            if (isNullOrEmpty(key))
            {
                key = list[i].id;
            }

            this.configsByKey.add(key, list[i]);
        }
    }


    getConfig(key: TKey)
    {
        if (!this.configsByKey.hasKey(key))
        {
            if (this.configs.hasKey(key))
            {
                return this.configs.getValue(key);
            }
            console.log(`${this.tableName} 没有 key=${key} 的配置`);
        }

        return this.configsByKey.getValue(key);
    }




}