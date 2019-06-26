/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import StudioEvaluationConfigReaderStruct from "../ReaderStructs/StudioEvaluationConfigReaderStruct";
import Dictionary from "../../Libs/Helpers/Dictionary";
import StudioEvaluationConfig from "../ConfigExtends/StudioEvaluationConfig";

export default class StudioEvaluationConfigReader extends StudioEvaluationConfigReaderStruct
{
    /** 类型字段 */
    private typeDict: Dictionary<int, StudioEvaluationConfig> = new Dictionary<int, StudioEvaluationConfig>();

    getConfigByTypes(storyType:int, expectType: int): StudioEvaluationConfig
    {
        let key = storyType.toString()+expectType.toString();
        return this.typeDict.getValue(key);
    }
    
    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configList;
        for (let config of list)
        {
            let key = config.label_storyType.toString()+config.expectedType.toString();
            let tmpConfig = this.typeDict.getValue(key);
            if(!tmpConfig)
            {
                this.typeDict.add(key, config);
            }
        }
    }
}