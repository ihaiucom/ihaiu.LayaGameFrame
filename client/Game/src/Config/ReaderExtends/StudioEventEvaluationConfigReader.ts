/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import StudioEventEvaluationConfigReaderStruct from "../ReaderStructs/StudioEventEvaluationConfigReaderStruct";
import Dictionary from "../../Libs/Helpers/Dictionary";
import StudioEventEvaluationConfig from "../ConfigExtends/StudioEventEvaluationConfig";

export default class StudioEventEvaluationConfigReader extends StudioEventEvaluationConfigReaderStruct
{
    /** 类型字段 */
    private typeDict: Dictionary<int, StudioEventEvaluationConfig[]> = new Dictionary<int, StudioEventEvaluationConfig[]>();

    getTypeConfigList(type:int): StudioEventEvaluationConfig[]
    {
        return this.typeDict.getValue(type);
    }
    
    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configList;
        for (let config of list)
        {
            let typeList = this.typeDict.getValue(config.type);
            if(!typeList)
            {
                typeList = [];
                this.typeDict.add(config.type, typeList);
            }
            typeList.push(config);
        }
    }
}