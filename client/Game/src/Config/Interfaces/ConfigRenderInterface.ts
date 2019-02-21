import ConfigLoaderInterface from "./ConfigLoaderInterface";
import ConfigRenderComplete from "./ConfigRenderComplete";

// 配置读取器接口
export default interface ConfigRenderInterface
{

    // 获取配置文件路径        
    getConfigPath(): string;


    // 加载配置
    load(configLoader?: ConfigLoaderInterface, onComplete?: ConfigRenderComplete);

    // 重新加载配置
    reload(configLoader?: ConfigLoaderInterface, onComplete?: ConfigRenderComplete);

    // 游戏加载完所有
    onGameLoadedAll();

    // 清理
    clear();
}