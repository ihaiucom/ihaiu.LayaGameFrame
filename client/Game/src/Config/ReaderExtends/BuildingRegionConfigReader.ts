/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import BuildingRegionConfigReaderStruct from "../ReaderStructs/BuildingRegionConfigReaderStruct";
import BuildingRegionConfig from "../ConfigExtends/BuildingRegionConfig";

export default class BuildingRegionConfigReader extends BuildingRegionConfigReaderStruct
{
    getConfigsByBuildingType(type: number): Array<BuildingRegionConfig> {
        let list= this.configs.getValues();
        let arr = []; 
        for (let i = 0; i < list.length; i++) {
            let config = list[i];
            if (config.buildingType == type) {
                arr.push(config)
            }
        }

        return arr;
    }
}