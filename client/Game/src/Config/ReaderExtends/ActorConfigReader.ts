/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import ActorConfigReaderStruct from "../ReaderStructs/ActorConfigReaderStruct";
import PropHelper from "../../GameFrame/Props/PropHelper";
import LabelHelper from "../../GameFrame/PropLabels/LabelHelper";

export default class ActorConfigReader extends ActorConfigReaderStruct
{
    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configs.getValues();
        for (let i = 0; i < list.length; i++)
        {
            LabelHelper.GenerateConfigLabelList(list[i], list[i].labelList);
            PropHelper.GenerateConfigPropList(list[i], list[i].propList);
        }
    }
}