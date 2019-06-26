/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import StorySeriesConfigReaderStruct from "../ReaderStructs/StorySeriesConfigReaderStruct";

export default class StorySeriesConfigReader extends StorySeriesConfigReaderStruct
{
    getAllConfigs()
    {
        return this.configList;
    }
}