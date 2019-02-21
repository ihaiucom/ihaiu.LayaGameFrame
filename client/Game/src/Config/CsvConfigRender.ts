import BaseConfig from "./BaseConfig";
import BaseConfigRender from "./BaseConfigRender";
import Dictionary from "../Libs/Helpers/Dictionary";
import ConfigLoaderInterface from "./Interfaces/ConfigLoaderInterface";
import ConfigRenderComplete from "./Interfaces/ConfigRenderComplete";

export default abstract class CsvConfigRender<T extends BaseConfig> extends BaseConfigRender<T>
{
    // 单元格分隔符
    csvDelimiter: string = "\t";

    // 单元格分隔符 替换
    csvSeparatorReplace: string = null;

    // 行分隔符 替换
    csvLineSeparatorReplace: string = "|n|";

    // 替换分割符
    ReplaceSpearator(txt: string): string
    {
        if (this.tableName == "TextFgui" && txt.indexOf(this.csvLineSeparatorReplace) != -1)
        {
            var a = 1;
        }
        txt = txt.replace(/\|n\|/g, "\n");

        // if (!isNullOrEmpty(this.csvSeparatorReplace))
        // {
        //     txt = txt.replaceAll(this.csvSeparatorReplace, this.csvDelimiter);
        // }

        txt = txt.replace(/\r/g, "");

        return txt;
    }



    // 表头--类型
    headTypes: Dictionary<number, string> = new Dictionary<number, string>();

    // 表头--索引
    headKeyEns: Dictionary<string, number> = new Dictionary<string, number>();

    // 表头--字段
    headKeyFields: Dictionary<number, string> = new Dictionary<number, string>();

    // 表头--中文
    headKeyCns: Dictionary<number, string> = new Dictionary<number, string>();


    // 加载配置
    load(configLoader?: ConfigLoaderInterface, onComplete?: ConfigRenderComplete)
    {
        configLoader.loadConfig(this.getConfigPath(), (txt: string, path?: string) =>
        {
            this.parse(txt);

            // console.log(`配置 ${this.path} 加载完成`);

            if (onComplete)
            {
                onComplete(this);
            }

            configLoader.unloadConfig(this.getConfigPath());
        });
    }


    // 重新加载配置
    reload(configLoader?: ConfigLoaderInterface, onComplete?: ConfigRenderComplete)
    {
        this.clear();
        this.load(configLoader, onComplete);
    }


    // 清理
    clear()
    {
        this.headTypes.clear();
        this.headKeyEns.clear();
        this.headKeyFields.clear();
        this.headKeyCns.clear();

        super.clear();
    }


    parse(txt: string)
    {
        if (txt == null)
        {
            console.error(`${this.tableName}: txt=${txt}`);
            return;
        }

        let lines: string[] = txt.split('\n');
        let line: string;
        let csv: string[];

        line = lines[0];
        csv = line.split(this.csvDelimiter);
        this.ParseHeadTypes(csv);


        line = lines[1];
        csv = line.split(this.csvDelimiter);
        this.ParseHeadKeyCN(csv);

        line = lines[2];
        csv = line.split(this.csvDelimiter);
        this.ParseHeadKeyEN(csv);

        for (let i = 3; i < lines.length; i++)
        {
            line = lines[i];
            if (isNullOrEmpty(line))
                continue;
            csv = line.split(this.csvDelimiter);
            for (let j = 0; j < csv.length; j++)
            {
                csv[j] = this.ReplaceSpearator(csv[j]);
            }
            this.ParseCsv(csv);
        }

    }



    ParseHeadTypes(csv: string[])
    {
        let key: string;
        for (let i = 0; i < csv.length; i++)
        {
            key = csv[i];
            if (!isNullOrEmpty(key))
            {
                key = key.trim();
                this.headTypes.add(i, key);
            }
        }
    }

    ParseHeadKeyCN(csv: string[])
    {
        let key: string;
        for (let i = 0; i < csv.length; i++)
        {
            key = this.ReplaceSpearator(csv[i]);
            if (!isNullOrEmpty(key))
            {
                key = key.trim();
                this.headKeyCns.add(i, key);
            }
        }
    }

    ParseHeadKeyEN(csv: string[])
    {
        let key: string;
        for (let i = 0; i < csv.length; i++)
        {
            key = csv[i];
            if (!isNullOrEmpty(key))
            {
                key = key.trim();

                if (this.headKeyEns.hasKey(key))
                {
                    console.error(`${this.tableName}: ParseHeadKeyEN 已经存在key= ${key},  i = ${i}`);
                }
                this.headKeyEns.add(key, i);
                this.headKeyFields.add(i, key);
            }
        }
    }


    ParseCsv(csv: string[])
    {
    }

    GetHeadType(index: number): string
    {
        return this.headTypes.getValue(index);
    }

    GetHeadField(index: number): string
    {
        return this.headKeyFields.getValue(index);
    }

    GetHeadIndex(enName: string): number
    {
        if (this.headKeyEns.hasKey(enName))
        {
            return this.headKeyEns.getValue(enName);
        }

        console.error(`${this.tableName}: headKeyEns[${enName}] = -1`);
        return -1;
    }

    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
    }


}