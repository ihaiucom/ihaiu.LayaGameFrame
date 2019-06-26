import BuildingComponentConfig from "../../Config/ConfigExtends/BuildingComponentConfig";

export default class BuildingComponentData {
    // 摆件ID
    id: number;

    // 摆件等级
    level: string;

    // 摆件配置
    config: BuildingComponentConfig;

    // 创建
    static Create(config: BuildingComponentConfig): BuildingComponentData {
        let componentData = new BuildingComponentData();
        componentData.id = config.id;
        componentData.config= config;

        return componentData;
    }

    // 家具皮肤集合
    getFurnitures(level: string): Array<any>
    {
        return this.config[level];
    }
}