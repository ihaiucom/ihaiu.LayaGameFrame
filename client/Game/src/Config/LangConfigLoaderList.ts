import LangConfigReader from "./LangConfigReader";

/////////////////////////////////////
// ihaiu.Language生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

/// 配置读取器列表
export default class LangConfigLoaderList
{
    lang: string = "zh_cn";

    // 读取器列表
    renders: LangConfigReader[] = [];

    
    textCode   = new LangConfigReader("TextCode");
    textFgui   = new LangConfigReader("TextFgui");


    // 初始化读取器列表
    initList()
    {
    }
}