import DecorationRegionLevelConfig from "./DecorationRegionLevelConfig";
import BuildingDecorationRegionList from "./BuildingDecorationRegionList";

/** 区域数据 */
export default class DecorationRegionData
{
    /** 建筑区域列表 */
    building:BuildingDecorationRegionList;

    /** 区域ID */
    regionId:int;

    /** 区域等级 */
    regionLevel:int;

    /** 区域等级配置 */
    regionLevelConfig: DecorationRegionLevelConfig;
    
    /** 摆件等级 */
    decorationLevel:int;
}