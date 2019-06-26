import Game from "../../Game";
import BuildingModel from "../../GameModule/DataModels/BuildingModel";
import BuildingData, { BuildingSucceeType } from "../../GameModule/DataStructs/BuildingData";

import BuildEndOfLevelUpS2C = proto.BuildEndOfLevelUpS2C;
import IBuildInfo = proto.IBuildInfo;
var BuildEndOfLevelUpS2CHandler = function(msg: BuildEndOfLevelUpS2C)
{
    if (msg.error)
        return;
    
    let info: IBuildInfo = msg.buildInfo;
    let buildingmode: BuildingModel = Game.moduleModel.building;
    buildingmode.setBuildProductInfo(info.buildType, info.productInfo);     
    buildingmode.setBuildLevel(info.buildType, info.state, info.buildLevel);
    buildingmode.setBuildEndTime(info.buildType, info.state, info.endTime);

    // 计算数据
    buildingmode.buildCalculate(info.buildType);
    buildingmode.buildBuildingOrLevelChange(info.buildType, true);
    
    let type = info.buildLevel == 1 ? BuildingSucceeType.Build : BuildingSucceeType.Level
    buildingmode.buildSuccessShow(info.buildType, type)
}

export {BuildEndOfLevelUpS2CHandler}
