
// 加载回调接口
export interface ConfigLoaderCallback
{
    (txt: string, path?: string, ): void;
}
