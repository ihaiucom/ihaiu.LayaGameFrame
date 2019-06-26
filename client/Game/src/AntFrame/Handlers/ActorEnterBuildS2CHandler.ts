import Game from "../../Game";
import BuildingModel from "../../GameModule/DataModels/BuildingModel";
import GameEventKey from "../../GameEventKey";
import BuildingData from "../../GameModule/DataStructs/BuildingData";

import ActorEnterBuildS2C = proto.ActorEnterBuildS2C;

var ActorEnterBuildS2CHandler = function(msg: ActorEnterBuildS2C)
{
    if (msg.error)
        return;

    let info: ActorEnterBuildS2C = msg;
    let buildingmode: BuildingModel = Game.moduleModel.building;
    buildingmode.setActorCell(info.actorCell.cellId, info.actorCell.actorId); 
    buildingmode.setBuildProductInfo(info.buildType, info.productInfo);

    // 计算数据
    buildingmode.buildCalculate(info.buildType);
    buildingmode.buildBuildingOrLevelChange(info.buildType, true);
}

export {ActorEnterBuildS2CHandler}
