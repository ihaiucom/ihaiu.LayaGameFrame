import DecorationData from "./DecorationData";

/** 建筑等级配置 */
export default class BuildingLevelConfig
{
    /** 建筑Id */
    buildId: int;
    /** 建筑等级 */
    buildLevel: int;

    /** 建筑摆件列表 */
    decorationList: DecorationData[] = [];
}