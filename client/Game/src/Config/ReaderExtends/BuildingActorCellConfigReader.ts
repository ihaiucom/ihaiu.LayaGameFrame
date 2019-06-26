/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import BuildingActorCellConfigReaderStruct from "../ReaderStructs/BuildingActorCellConfigReaderStruct";
import BuildingActorCellConfig from "../ConfigExtends/BuildingActorCellConfig";
import Dictionary from "../../Libs/Helpers/Dictionary";
import BuildingConfig from "../ConfigExtends/BuildingConfig";
import Game from "../../Game";

export default class BuildingActorCellConfigReader extends BuildingActorCellConfigReaderStruct
{

    /** 获取建筑艺人槽列表 */
    public getBuildingCells(buildingId: int): BuildingActorCellConfig[]
    {
        let buildingConfig = Game.config.building.getConfig(buildingId);
        return buildingConfig.buildActorCellConfigs;
    }

    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configs.getValues();
        let config: BuildingActorCellConfig;
        let buildingConfig: BuildingConfig;
        for (let i = 0; i < list.length; i++)
        {
            config = list[i];
            buildingConfig = Game.config.building.getConfig(config.buildingId);
            buildingConfig.buildActorCellConfigs.push(config);
        }
    }
}