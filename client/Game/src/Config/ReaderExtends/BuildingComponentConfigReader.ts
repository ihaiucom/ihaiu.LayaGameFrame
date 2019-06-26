/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import BuildingComponentConfigReaderStruct from "../ReaderStructs/BuildingComponentConfigReaderStruct";
import BuildingComponentConfig from "../ConfigExtends/BuildingComponentConfig";

export default class BuildingComponentConfigReader extends BuildingComponentConfigReaderStruct
{
    getConfigsByIds(Ids: Array<number>): Array<BuildingComponentConfig> {
        let arr = []; 
        for (let i = 0; i < Ids.length; i++) {
            let config = this.getConfig(Ids[i]);
            arr.push(config);
        }

        return arr;
    }
}