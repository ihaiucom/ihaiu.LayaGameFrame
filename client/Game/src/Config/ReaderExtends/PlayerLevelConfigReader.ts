/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import PlayerLevelConfigReaderStruct from "../ReaderStructs/PlayerLevelConfigReaderStruct";

export default class PlayerLevelConfigReader extends PlayerLevelConfigReaderStruct
{
    maxLevel: number = 1;
    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configs.getValues();
        
        for(let config of list)
        {
            this.maxLevel = Math.max(this.maxLevel, config.id);
        }
    }
}