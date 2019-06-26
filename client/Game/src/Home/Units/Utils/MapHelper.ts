import { IMapUI } from "../../UnityViews/IMapUI";
import Mathf from "../../../Libs/Mathf";

/** 地图帮助类 */
export default class MapHelper
{
    /** 地图UI 刷新Zoom后 */
    static uiRefreshZoom(item: IMapUI, zoom: number)
    {
        if(item.isAbsoluteScale && item.visible)
        {
            let scale = item.sourceScale * zoom;
            item.relativeScale = Mathf.clamp(scale, item.minAbsoluteScale / zoom, item.maxAbsoluteScale / zoom);
        }
    }

    /** 绝对缩放 */
    static absoluteScale(sourceScale, minAbsoluteScale, maxAbsoluteScale, zoom: number)
    {
        if(zoom == 0) return 0;

        let scale = sourceScale * zoom;
        return  Mathf.clamp(scale, minAbsoluteScale / zoom, maxAbsoluteScale / zoom);
    }
}