/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import StudioLevelConfigReaderStruct from "../ReaderStructs/StudioLevelConfigReaderStruct";
import StudioLevelConfig from "../ConfigExtends/StudioLevelConfig";

export default class StudioLevelConfigReader extends StudioLevelConfigReaderStruct
{

    maxLevelConfig: StudioLevelConfig;
    progressList: StudioLevelConfig[] = [];
    
    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configList;
        let maxVal = 1;
        this.progressList.length = 0;
        for (let config of list)
        {
            if(this.maxLevelConfig == null)
                this.maxLevelConfig = config;
            else if(this.maxLevelConfig.max < config.max)
            {
                this.maxLevelConfig = config;
                maxVal = config.max;
            }

            if(config.id >= 4)
            {
                this.progressList.push(config);
            }
        }

        
        for (let config of list)
        {
            config.minRate = config.min / maxVal;
            config.maxRate = config.max / maxVal;
        }
    }
}