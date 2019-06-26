import Game from "../../Game";
import BuildingData, { BuildingSucceeType } from "../../GameModule/DataStructs/BuildingData";
import BuildingModel from "../../GameModule/DataModels/BuildingModel";

import BuildBreakUpS2C = proto.BuildBreakUpS2C;
import IBuildInfo = proto.IBuildInfo;

var BuildBreakUpS2CHandler = function(msg: BuildBreakUpS2C)
{
    if (msg.error)
        return;
    
    let info: IBuildInfo = msg.buildInfo;   
    let buildingmode: BuildingModel = Game.moduleModel.building; 
    buildingmode.setBuildLevelMax(info.buildType, info.breakLevelMax);

    // 计算数据
    buildingmode.buildCalculate(info.buildType);
    buildingmode.buildBuildingOrLevelChange(info.buildType);
    buildingmode.buildSuccessShow(info.buildType, BuildingSucceeType.Break)
}

export {BuildBreakUpS2CHandler}
