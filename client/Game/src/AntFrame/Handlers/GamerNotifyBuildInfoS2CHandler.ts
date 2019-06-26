import Game from "../../Game";
import BuildingModel from "../../GameModule/DataModels/BuildingModel";
import GamerNotifyBuildInfoS2C = proto.GamerNotifyBuildInfoS2C;
import IBuildInfo = proto.IBuildInfo;
var GamerNotifyBuildInfoS2CHandler = function(msg: GamerNotifyBuildInfoS2C)
{
    if (msg.error)
        return;
    
    let buildingmode: BuildingModel = Game.moduleModel.building;

    let infos: Array<IBuildInfo> = msg.buildInfo;
    for (let i = 0; i < infos.length; i++) {
        let info: IBuildInfo = infos[i];
        buildingmode.setBuildProductInfo(info.buildType, info.productInfo);        
        buildingmode.setBuildLevel(info.buildType, info.state, info.buildLevel);
        buildingmode.setBuildLevelMax(info.buildType, info.breakLevelMax);
        buildingmode.setBuildStartTime(info.buildType, info.startTime)
        buildingmode.setBuildEndTime(info.buildType, info.state, info.endTime); 

        for (let j = 0; j < info.actorCell.length; j++) {
            let actor = info.actorCell[j];
            buildingmode.setActorCell(actor.cellId, actor.actorId); 
        }

        // 计算数据
        buildingmode.buildCalculate(info.buildType);
        buildingmode.buildBuildingOrLevelChange(info.buildType, true);
    }
}

export {GamerNotifyBuildInfoS2CHandler}
