import BaseConfig from "./BaseConfig";
import Dictionary from "../Libs/Helpers/Dictionary";
import ConfigRenderInterface from "./Interfaces/ConfigRenderInterface";
import ConfigLoaderInterface from "./Interfaces/ConfigLoaderInterface";
import ConfigRenderComplete from "./Interfaces/ConfigRenderComplete";
import Res from "./Keys/Res";

export default abstract class BaseConfigRender<T extends BaseConfig> implements ConfigRenderInterface
{
    // 表名
    tableName: string;

    // 配置字典
    configs: Dictionary<number, T> = new Dictionary<number, T>();

    // 获取配置列表
    getConfigList()
    {
        return this.configs.getValues();
    }

    // 配置列表
    get configList()
    {
        return this.configs.getValues();
    }

    // 获取配置
    getConfig(id: number)
    {
        if (!this.configs.hasKey(id))
        {
            console.log(`${this.tableName} 没有 id=${id} 的配置`);
        }
        return this.configs.getValue(id);
    }

    // 添加配置
    addConfig(config: T)
    {
        this.configs.add(config.id, config);
    }



    // 获取配置文件路径        
    getConfigPath(): string
    {
        return Res.config + `csv/${this.tableName}.csv`;
    }

    // 加载配置
    load(configLoader?: ConfigLoaderInterface, onComplete?: ConfigRenderComplete)
    {

    }

    // 重新加载配置
    reload(configLoader?: ConfigLoaderInterface, onComplete?: ConfigRenderComplete)
    {

    }


    // 游戏加载完所有
    onGameLoadedAll()
    {

    }

    // 清理
    clear()
    {
        this.configs.clear();
    }


}