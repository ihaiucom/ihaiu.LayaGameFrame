import HomeScene from "./HomeScene";
import BuildingModel from "../GameModule/DataModels/BuildingModel";
import { Engine } from "../Libs/ECS/Engine";
import HomeWorld from "./Units/Worlds/HomeWorld";
import ActorModel from "../GameModule/DataModels/ActorModel";

export default class Home
{
    scene: HomeScene = new HomeScene();
    constructor()
    {

    }

    install()
    {
        this.scene.install();


    }

    setData(isMySelfHome: boolean, buildingModel:BuildingModel, actorModel: ActorModel)
    {
        this.scene.setData(isMySelfHome, buildingModel, actorModel);
    }

    show()
    {
        this.scene.show();
    }

    hide()
    {
        this.scene.hide();
    }


    
}