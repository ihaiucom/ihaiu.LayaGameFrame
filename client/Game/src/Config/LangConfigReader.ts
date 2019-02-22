import CsvConfigRender from "./CsvConfigRender";
import LangConfig from "./LangConfig";
import ConfigFieldType from "./Interfaces/ConfigFieldType";

/** 多语言配置读取器 */
export default class LangConfigReader extends CsvConfigRender<LangConfig>
{
    // 语言
    public lang: string = "zh_cn";

    constructor(tableName: string)
    {
        super();
        this.tableName = tableName;
    }


    // 获取配置文件路径        
    getConfigPath(): string
    {
        return `config/lang/${this.lang}/${this.tableName}.csv`;
    }


    private _headKeyFieldList: string[];
    get headKeyFieldList(): string[]
    {
        if (!this._headKeyFieldList)
        {
            this._headKeyFieldList = this.headKeyFields.getValues();
        }
        return this._headKeyFieldList;
    }

    ParseCsv(csv: string[])
    {
        let config = new LangConfig();

        config.id = csvGetInt(csv, this.GetHeadIndex("id"));

        let fieldList = this.headKeyFieldList;
        for (let i = 0; i < fieldList.length; i++)
        {
            let txt = csvGetString(csv, this.GetHeadIndex(fieldList[i]));
            let headType = this.GetHeadType(i);
            switch (headType)
            {
                case ConfigFieldType.MStringArray:
                    config.dict.add(fieldList[i], toStringArray(txt));
                    break;
                default:
                    config.dict.add(fieldList[i], txt);
                    break;
            }
        }

        this.addConfig(config);
    }

}