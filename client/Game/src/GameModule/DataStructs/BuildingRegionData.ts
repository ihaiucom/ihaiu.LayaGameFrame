import Dictionary from "../../Libs/Helpers/Dictionary";
import FurnitureConfig from "../../Config/ConfigExtends/FurnitureConfig";
import BuildingRegionConfig from "../../Config/ConfigExtends/BuildingRegionConfig";
import BuildingComponentData from "./BuildingComponentData";

export default class BuildingRegionData {
    // 区域ID
    id: number;

    // 区域name
    name: string;

    // 区域等级
    level: string;

    // 建筑ID
    buildId: number;

    // 摆件ID数组
    componentGroupId: Array<number>;

    // 摆件数量
    componentGroupNum: number;


    // 创建
    static Create(config: BuildingRegionConfig): BuildingRegionData {
        let regionData = new BuildingRegionData();
        regionData.id = config.id;
        regionData.name = config.name;
        regionData.buildId = config.buildingType;
        regionData.componentGroupId = config.ComponentGroupId;
        regionData.componentGroupNum = config.ComponentGroupId.length;

        return regionData;
    }
}