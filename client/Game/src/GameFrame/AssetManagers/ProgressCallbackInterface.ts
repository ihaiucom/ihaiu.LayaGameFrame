import AssetItemInfo from "./AssetItemInfo";

// 进度接口
export default interface ProgressCallbackInterface
{
    ( rate:number, current: number, max:number, assetItemInfo?: AssetItemInfo):void;
}
