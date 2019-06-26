/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import StoryCharactersConfigReaderStruct from "../ReaderStructs/StoryCharactersConfigReaderStruct";
import StoryCharactersConfig from "../ConfigExtends/StoryCharactersConfig";

export default class StoryCharactersConfigReader extends StoryCharactersConfigReaderStruct
{
    storyEventIds(id: number): Array<number> {
        let eventIds: Array<number> = [];
        
        let list = this.configs.getValues();
        let config: StoryCharactersConfig;
        for (let i = 0; i < list.length; i++) {
            config = list[i];
            if (config.storyId == id) {
                eventIds.concat(config.storyEventId);
            }
        }
        return eventIds;
    }
}