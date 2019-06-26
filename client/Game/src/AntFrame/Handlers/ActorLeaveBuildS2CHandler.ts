import BuildingModel from "../../GameModule/DataModels/BuildingModel";
import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
import BuildingData from "../../GameModule/DataStructs/BuildingData";

import ActorLeaveBuildS2C = proto.ActorLeaveBuildS2C;

var ActorLeaveBuildS2CHandler = function (msg: ActorLeaveBuildS2C) 
{
    if (msg.error)
        return;

    let info: ActorLeaveBuildS2C = msg;
    let buildingmode: BuildingModel = Game.moduleModel.building;
    buildingmode.setActorCell(info.actorCell.cellId, info.actorCell.actorId);
    buildingmode.delBuildProductInfo(info.buildType, info.actorId)

    // 计算数据
    buildingmode.buildCalculate(info.buildType);
    buildingmode.buildBuildingOrLevelChange(info.buildType, true);
}

export { ActorLeaveBuildS2CHandler }
