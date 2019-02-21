import { ConfigLoaderCallback } from "./ConfigLoaderCallback";

// 配置加载器接口
export default interface ConfigLoaderInterface
{
    loadConfig(path: string, callback?: ConfigLoaderCallback);
    unloadConfig(path: string);
}
