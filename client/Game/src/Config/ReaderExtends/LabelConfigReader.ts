/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import LabelConfigReaderStruct from "../ReaderStructs/LabelConfigReaderStruct";
import LabelConfig from "../ConfigExtends/LabelConfig";
import LabelType from "../../GameFrame/PropLabels/LabelType";
import LabelTypeConfig from "../ConfigExtends/LabelTypeConfig";
import Game from "../../Game";

export default class LabelConfigReader extends LabelConfigReaderStruct
{
    // 情报的标签列表
    imformations: LabelConfig[] = [];
    
    onGameLoadedAll()
    {
        super.onGameLoadedAll();
        let list = this.configs.getValues();
        let config: LabelConfig;
        let typeConfig: LabelTypeConfig;
        this.imformations.length = 0;
        for (let i = 0; i < list.length; i++)
        {
            config = list[i];
            typeConfig = Game.config.labelType.getConfig(config.type);
            if(!typeConfig ) continue;
            if(typeConfig.isIntelligence)
            {
                this.imformations.push(config);
            }
            
            // console.log(`// ${typeConfig.Name}-${config.name}`);
            // console.log(`public static ${typeConfig.field}_${config.field} = ${config.id};`);
        }
    }
}