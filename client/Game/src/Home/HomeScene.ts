import Log from "../GameFrame/Log/Log";
import Scene2D from "./Scene2D";
import Scene3der from "./Scene3der";
import { PathFinding } from "../Libs/PathFinding/PathFinding";
import HomeWorld from "./Units/Worlds/HomeWorld";
import Res from "../Config/Keys/Res";
import BuildingModel from "../GameModule/DataModels/BuildingModel";
import ActorModel from "../GameModule/DataModels/ActorModel";

export default class HomeScene
{
    scene2D: Scene2D;
    scene3D: Scene3der; 

    /** 是否是自己的家园 */
    isMySelfHome: boolean = true;
    /** 建筑数据模型 */
    buildingModel: BuildingModel;
    /** 艺人数据模型 */
    actorModel: ActorModel;

    
    path: PathFinding = new PathFinding();
    engine: HomeWorld = new HomeWorld();

    install()
    {
        this.scene2D = new Scene2D();
        this.scene2D.install();
        Laya.stage.addChildAt(this.scene2D, 0);

        // this.scene3D = new Scene3der();
        // Laya.stage.addChildAt(this.scene3D, 1);
        // this.scene3D.install(this.scene2D);

        Laya.stage.on(laya.events.Event.RESIZE, this, this.onScreenResize);

        this.engine.init(this);
        
    }

    
    private isinstallAsynced = false;
    async installAsync()
    {
        if(this.isinstallAsynced)
            return;

        this.isinstallAsynced = true;
        
        // 加载寻路
        await this.path.loadPathDataAsync(Res.getHomePath());
        // 调试寻路点
        // this.debugPathNode();

        this.engine.install();
        this.engine.start();
        this.scene2D.map.start(this);
    }


    // 调试寻路点
    debugPathNode()
    {

        for(let node of this.path.pathFindingData.routeNodes)
        {
            let s = new Laya.Sprite();
            s.graphics.drawCircle(5, 5, 5, "#FF0000FF", "#000000", 1);
            s.pivot(5, 5);
            this.scene2D.addChild(s);
            s.pos(node.x, node.y);
        }

    }

    

    
    setData(isMySelfHome: boolean, buildingModel:BuildingModel, actorModel: ActorModel)
    {
        this.isMySelfHome = isMySelfHome;
        this.buildingModel = buildingModel;
        this.actorModel = actorModel;
        this.scene2D.map.buildingModel = buildingModel;
        Laya.timer.frameOnce(1, this, this.delayInstall);
    }

    delayInstall()
    {
        this.installAsync();
    }


    show()
    {
        Laya.stage.addChildAt(this.scene2D, 0);
        // Laya.stage.addChildAt(this.scene3D, 1);
        Laya.stage.on(laya.events.Event.RESIZE, this, this.onScreenResize);

        this.engine.start();
        this.scene2D.map.onWindowShow();
    }

    hide()
    {
        this.scene2D.removeSelf();
        // this.scene3D.removeSelf();
        Laya.stage.offAllCaller(this);
        
        this.engine.stop();
        this.scene2D.map.onWindowHide();
        
    }

    private onScreenResize()
    {
        this.scene2D.onScreenResize();
        // this.scene3D.onScreenResize();
    }

     


}