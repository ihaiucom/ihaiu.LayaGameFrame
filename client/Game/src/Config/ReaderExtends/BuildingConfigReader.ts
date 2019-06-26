/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import BuildingConfigReaderStruct from "../ReaderStructs/BuildingConfigReaderStruct";
import BuildingConfig from "../ConfigExtends/BuildingConfig";

export default class BuildingConfigReader extends BuildingConfigReaderStruct
{
    getBuildingIdByOrder(order: number): number {
        let list = this.configs.getValues();
        let config: BuildingConfig;
        for (let i = 0; i < list.length; i++) {
            config = list[i];
            if (config.order == order) {
                return config.id;
            }
        }

        return 0;
    }

}