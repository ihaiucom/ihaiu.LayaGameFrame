
// 加载回调接口
export default interface ConfigLoaderCallback
{
    (txt: string, path?: string, ): void;
}
