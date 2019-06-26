import BuildingConfigStruct from "../ConfigStructs/BuildingConfigStruct";
import BuildingActorCellConfig from "./BuildingActorCellConfig";

export default class BuildingConfig extends BuildingConfigStruct 
{
    // 建筑效果配置列表
    // buildEffectConfigs:BuildingEffectConfig[] = [];

    // 艺人进驻槽配置列表
    buildActorCellConfigs: BuildingActorCellConfig[] = [];
}