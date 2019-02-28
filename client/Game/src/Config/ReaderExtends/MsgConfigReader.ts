/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import MsgConfigReaderStruct from "../ReaderStructs/MsgConfigReaderStruct";
import Dictionary from "../../Libs/Helpers/Dictionary";
import MsgConfig from "../ConfigExtends/MsgConfig";

export default class MsgConfigReader extends MsgConfigReaderStruct
{
    
    // 配置字典
    configsByKey: Dictionary<TKey, MsgConfig> = new Dictionary<TKey, MsgConfig>();

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

    getTxt(key: TKey): string
    {
        let config = this.getConfig(key);
        if (!config)
        {
            return `[Error]${this.tableName} 没有 key=${key} 的配置`
        }
        return config.notice;
    }

    getTxtFormat(key: TKey, ...args): string
    {
        let txt = this.getTxt(key).format(...args);
        return txt;
    }


    // 生成KEY 代码
    outKeyCode()
    {
        console.log("");
        console.log("class MsgKey");
        console.log("{");


        let list = this.configsByKey.getValues();
        for (let i = 0; i < list.length; i++)
        {

            let key: TKey = list[i].key;
            let val: TKey = key;
            if (isNullOrEmpty(key))
            {
                key = "KEY_" + list[i].id;
                val = list[i].id;
            }
            else
            {
                key = key.replace("-", "_");
            }



            console.log(`	static ${key} = "${val}";`);
        }
        console.log("}");

        console.log("");
        console.log("");
    }
}