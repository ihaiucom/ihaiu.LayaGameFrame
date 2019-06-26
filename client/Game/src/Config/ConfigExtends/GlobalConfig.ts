/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import GlobalConfigStruct from "../ConfigStructs/GlobalConfigStruct";
import Game from "../../Game";
import DTValue2 from "./DTValue2";
import DTValue3 from "./DTValue3";

export default class GlobalConfig extends GlobalConfigStruct
{
	private static getConfig(key: TKey): GlobalConfig
    {
        return Game.config.global.getConfig(key);
    }

    // 获取一个整数
    static getValue(key: TKey): number
    {
        let config = GlobalConfig.getConfig(key);
        if (config)
        {
            return config.value;
        }
        return 0;
    }

    // 获取一维数组
    static getValue1(key: TKey): number[]
    {
        let config = GlobalConfig.getConfig(key);
        if (config)
        {
            return config.value1;
        }
        return [];
    }

    // 获取二维数组
    static getValue2(key: TKey): DTValue2[]
    {
        let config = GlobalConfig.getConfig(key);
        if (config)
        {
            return config.value2;
        }
        return [];
    }

    // 获取三维数组
    static getValue3(key: TKey): DTValue3[]
    {
        let config = GlobalConfig.getConfig(key);
        if (config)
        {
            return config.value3;
        }
        return [];
    }

    // 获取字符串
    static getValue4(key: TKey): string
    {
        let config = GlobalConfig.getConfig(key);
        if (config)
        {
            return config.value4;
        }
        return "";
    }

    static getValue6(key: TKey): number 
    {
        let config = GlobalConfig.getConfig(key);
        if (config)
        {
            return config.value6;
        }
        return 0;
    }
}