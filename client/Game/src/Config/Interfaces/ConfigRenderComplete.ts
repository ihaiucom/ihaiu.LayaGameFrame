import ConfigRenderInterface from "./ConfigRenderInterface";

// 加载回调接口
export default interface ConfigRenderComplete
{
    (render: ConfigRenderInterface): void;
}
