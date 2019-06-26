/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import BuildingLevelConfigReaderStruct from "../ReaderStructs/BuildingLevelConfigReaderStruct";
import PropHelper from "../../GameFrame/Props/PropHelper";
import BuildingLevelConfig from "../ConfigExtends/BuildingLevelConfig";
import Game from "../../Game";
import ConfigIdHelper from "../ConfigIdHelper";

export default class BuildingLevelConfigReader extends BuildingLevelConfigReaderStruct
{
    // 最大等级字典
    private maxLevelDict = {};

    /** 获取最大等级 */
    getMaxLevel(id:int):int
    {
        return this.maxLevelDict[id];
    }


    /** 获取等级配置 */
    getLevelConfig(id: int, level:int)
    {
        let levelId = ConfigIdHelper.getBuildingLevelId(id, level);
        return this.getConfig(levelId);
    }
    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configs.getValues();
        let config: BuildingLevelConfig;
        for (let i = 0; i < list.length; i++)
        {
            config = list[i];
            this.maxLevelDict[config.type] = Math.max(config.level, this.maxLevelDict[config.type] ? this.maxLevelDict[config.type] : 0);

            PropHelper.GenerateConfigPropList(config, config.propList);
        }
    }
}