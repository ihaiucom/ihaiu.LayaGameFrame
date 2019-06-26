import Game from "../../Game";
import BuildingModel from "../../GameModule/DataModels/BuildingModel";
import BuildLevelUpS2C = proto.BuildLevelUpS2C;
import IBuildInfo = proto.IBuildInfo;
var BuildLevelUpS2CHandler = function(msg: BuildLevelUpS2C)
{
    if (msg.error)
        return;

    let info: IBuildInfo = msg.buildInfo;    
    Game.time.settingServerTimestamp = msg.currentServerTime * 1000;
    
    let buildingmode: BuildingModel = Game.moduleModel.building;
    buildingmode.setBuildLevelMax(info.buildType, info.breakLevelMax)
    buildingmode.setBuildStartTime(info.buildType, info.startTime)
    buildingmode.setBuildEndTime(info.buildType, info.state, info.endTime);  

    buildingmode.buildBuildingOrLevelChange(info.buildType, true);
}

export {BuildLevelUpS2CHandler}
