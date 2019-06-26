import BuildingModel from "../../GameModule/DataModels/BuildingModel";
import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
import BuildGetProductS2C = proto.BuildGetProductS2C;
var BuildGetProductS2CHandler = function(msg: BuildGetProductS2C)
{
    if (msg.error)
        return;

    let info: any = msg;
    let buildingmode: BuildingModel = Game.moduleModel.building;
    buildingmode.setBuildProductInfo(info.buildType, info.productInfo); 
    buildingmode.buildBuildingOrLevelChange(info.buildType);
}

export {BuildGetProductS2CHandler}
