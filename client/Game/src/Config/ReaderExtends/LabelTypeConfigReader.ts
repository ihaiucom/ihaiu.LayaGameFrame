/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import LabelTypeConfigReaderStruct from "../ReaderStructs/LabelTypeConfigReaderStruct";
import LabelTypeConfig from '../ConfigExtends/LabelTypeConfig';

export default class LabelTypeConfigReader extends LabelTypeConfigReaderStruct
{
    
    // onGameLoadedAll()
    // {
    //     super.onGameLoadedAll();
    //     let list = this.configs.getValues();
    //     let config: LabelTypeConfig;
    //     for (let i = 0; i < list.length; i++)
    //     {
    //         config = list[i];
    //         console.log(`// ${config.Name}`);
    //         console.log(`public static ${config.field} = ${config.id};`);
    //     }
    // }
}