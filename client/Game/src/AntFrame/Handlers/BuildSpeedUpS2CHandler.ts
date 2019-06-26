import BuildSpeedUpS2C = proto.BuildSpeedUpS2C;
import Game from "../../Game";
import BuildingModel from "../../GameModule/DataModels/BuildingModel";
var BuildSpeedUpS2CHandler = function(msg: BuildSpeedUpS2C)
{
    if (msg.error)
        return;
    
    let info: any = msg.buildInfo;  
    Game.time.settingServerTimestamp = msg.currentServerTime * 1000;  
    let buildingmode: BuildingModel = Game.moduleModel.building;
    buildingmode.setBuildEndTime(info.buildType, info.state, info.endTime);  

    buildingmode.buildBuildingOrLevelChange(info.buildType, true);
}

export {BuildSpeedUpS2CHandler}
