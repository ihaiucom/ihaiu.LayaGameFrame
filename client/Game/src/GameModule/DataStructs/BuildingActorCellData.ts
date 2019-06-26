import BuildingData from "./BuildingData";
import Game from "../../Game";
import BuildingActorCellConfig from "../../Config/ConfigExtends/BuildingActorCellConfig";
import Prop from "../../GameFrame/Props/Prop";
import ActorConfig from "../../Config/ConfigExtends/ActorConfig";
import ActorData from "./ActorData";

/** 建筑艺人进驻槽数据 */
export default class BuildingActorCellData
{
    // 建筑艺人进驻槽ID
    cellId:int = 0;

    // 建筑数据
    buildingData: BuildingData;
    
    // 艺人ID(-999表示无艺人)
    actorId:int = -999;

    // 是否是空槽
    get isEmpty(): boolean
    {
        return this.actorId <= 0;
    }

    // 艺人槽是否开启
    get isOpen(): boolean
    {
        let buiding = this.buildingData;
        if (buiding.isNoBre) {
            return buiding.level > this.actorCelllConfig.buildingLevelMin;
        } else {
            return buiding.level >= this.actorCelllConfig.buildingLevelMin
        }
    }

    // 艺人数据
    get actorData(): ActorData {
        if (this.isEmpty) {
            return null;
        }
        return Game.moduleModel.actor.getActor(this.actorId)
    }

    // 艺人配置
    get actorConfig():ActorConfig {
        if (this.isEmpty) {
            return null;
        }
        return Game.config.actor.getConfig(this.actorId);
    }

    // 建筑艺人槽配置
    get actorCelllConfig(): BuildingActorCellConfig
    {
        let buildingConfig  = Game.config.building.getConfig(this.buildingData.id);
        for (let actorcellConfig of buildingConfig.buildActorCellConfigs) {
            if (actorcellConfig.id == this.cellId) 
                return actorcellConfig; 
        }
        return null;
    }

}