import { Engine } from "../../../Libs/ECS/Engine";
import ActorData from "../../../GameModule/DataStructs/ActorData";
import { Entity } from "../../../Libs/ECS/Entity";
import SkeletonData from "../Components/SkeletonData";
import TransformData from "../Components/TransformData";
import Home from "../../Home";
import Game from "../../../Game";
import ShadowData from "../Components/ShadowData";
import ScreenLimitData from "../Components/ScreenLimitData";
import UnitData from "../Components/UnitData";
import { UnitType } from "../ExtEnums/UnitType";
import HierarchyData from "../Components/HierarchyData";
import HomeScene from "../../HomeScene";
import ActorModel from "../../../GameModule/DataModels/ActorModel";
import DoubleKeyMap from "../../../Libs/Helpers/DoubleKeyMap";
import SkeletonUnitView from "../../UnityViews/SkeletonUnitView";
import UnitIncludes from "../UnitIncludes";
import ViewPositionSystem from "../Systems/ViewPositionSystem";
import CmdReflex from "../Cmds/CmdReflex";
import UnitActionData from "../Components/UnitActionData";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import UnitCmdData from "../Components/UnitCmdData";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import MovePathData from "../Components/MovePathData";
import UnitCmdGenerateSystem from "../Systems/UnitCmdGenerateSystem";
import UnitCmdExeSystem from "../Systems/UnitCmdExeSystem";
import ViewHierarchySystem from "../Systems/ViewHierarchySystem";
import { PathFinding } from "../../../Libs/PathFinding/PathFinding";
import Dictionary from "../../../Libs/Helpers/Dictionary";
import BuildingModel from "../../../GameModule/DataModels/BuildingModel";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import BubbleTalkViewManager from "../../UnityViews/BubbleTalkViewManager";
import ViewBubbleTalkSystem from "../Systems/ViewBubbleTalkSystem";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import DragData from "../Components/DragData";
import { Component, ComponentClass } from "../../../Libs/ECS/Component";
import UnitCmdUtils from "../Utils/UnitCmdUtil";
import DecorationUtil from "../Utils/DecorationUtil";
import MapWalk from "../../../FGUI/Extends/SystemModuleHomeMap/MapWalk";
import MapUILayout from "../../UnityViews/MapUILayout";
import ViewMapUILayoutSystem from "../Systems/ViewMapUILayoutSystem";
import GameEventKey from "../../../GameEventKey";

export default class HomeWorld extends Engine
{
    // 场景
    scene: HomeScene;
    // 单位视图
    unitViewMap = new DoubleKeyMap<UnitType, int, SkeletonUnitView>();
    // 单位实体
    unitEngityMap = new DoubleKeyMap<UnitType, int, Entity>();
    // cmd辅助
    unitCmdUtil = new UnitCmdUtils();
    // 摆件辅助工具
    decorationUtil = new DecorationUtil();
    // 摆件占用情况
    decorationOccupy = new Dictionary<int, int>();
    // 气泡
    bubbleTalkViewManager = new BubbleTalkViewManager();

    /** 获取摆件被谁占用 */
    getDecorationOccupy(id:int): int
    {
        return this.decorationOccupy.getValue(id) 
    }

    /** 设置摆件被占用 */
    setDecorationOccupy(id:int, unitId:int)
    {
        this.decorationOccupy.add(id, unitId);
    }
    
    /** 设置摆件空闲 */
    setDecorationOccupyEmpty(id: int, unitId:int)
    {
        let result = this.decorationOccupy.getValue(id);
        if(result == unitId)
        {
            this.decorationOccupy.set(id, -1);
        }
    }

    /** 摆件是否被占用 */
    hasDecorationOccupy(id: int): boolean
    {
        return this.decorationOccupy.getValue(id) > 0;
    }

    /** 场景坐标转世界坐标 */
    localToGlobal(x: number, y: number): Laya.Point
    {
        return this.scene.scene2D.localToGlobal(Laya.Point.TEMP.setTo(x, y), false);
    }

    get zoom(): number
    {
        return this.scene.scene2D.zoom;
    }

    // 寻路
    get path(): PathFinding
    {
        return this.scene.path;
    }

    // 地图UI层
    get mapUILayout(): MapUILayout
    {
        return this.scene.scene2D.layoutUI;
    }

    // 艺人数据模型
    get actorModel(): ActorModel
    {
        return this.scene.actorModel;
    }

    // 建筑数据模型
    get buildingModel(): BuildingModel
    {
        return this.scene.buildingModel;
    }

    /** 获取单位实体 */
    getUnitEntity(unitType: UnitType, unitId: int)
    {
        return this.unitEngityMap.getValue(unitType, unitId);
    }

    /** 获取单位组件 */
    getUnitCompoenent<T extends Component>(unitType: UnitType, unitId: int, componentClass: ComponentClass<T>): T 
    {
        let entity = this.getUnitEntity(unitType, unitId);
        if(entity)
        {
            return entity.getComponent(componentClass);
        }
        return null;
    }

    init(scene: HomeScene)
    {
        this.scene = scene;
        this.unitCmdUtil.install(this);
        this.decorationUtil.install(this);
        MapWalk.Instance.engine = this;
    }

    
    isStarted = false;
    start()
    {
        if(!this.isInstalled || this.isStarted)
            return;

        this.isStarted = true;
        Laya.timer.frameLoop(1, this, this.onLoop);
    }

    stop()
    {
        this.isStarted = false;
        Laya.timer.clear(this, this.onLoop);
    }

    private onLoop()
    {
        this.update(Laya.timer.delta);
        this.etUpdate();
        this.etLateUpdate();
    }

    isInstalled = false;
    install()
    {
        if(this.isInstalled)
            return;
            
        this.isInstalled = true;
        CmdReflex.install();
        UnitIncludes.install();
        this.initFormAssembly();
        this.bubbleTalkViewManager.install(this.scene.scene2D.layoutUI);
        
        let actorList = this.actorModel.actorList;
        for(let actor of actorList)
        {
            this.addActor(actor);
        }

        this.actorModel.sAdd.add(this.onActorAdd, this);


        this.addSystem(new UnitCmdGenerateSystem());
        this.addSystem(new UnitCmdExeSystem());
        this.addSystem(new ViewPositionSystem());
        // this.addSystem(new ViewHierarchySystem());
        this.addSystem(new ViewBubbleTalkSystem());
        this.addSystem(new ViewMapUILayoutSystem());
        
        

        // 设置建筑开放寻路
        let buildingList = this.buildingModel.buildingList;
        for(let building of buildingList)
        {
            if(building.builded)
                this.path.setAreaOpen(building.id);
        }

        Game.event.add(GameEventKey.Build_CloseSuccess, this.onBuildingChange, this);
    }


    destory()
    {
        this.actorModel.sAdd.remove(this.onActorAdd, this);
        Game.event.remove(GameEventKey.Build_CloseSuccess, this.onBuildingChange, this);
    }

    onBuildingChange(building: BuildingData)
    {
        if(building.builded)
            this.path.setAreaOpen(building.id);
        else
            this.path.setAreaClose(building.id);
    }

    onActorAdd(actorData: ActorData)
    {
        this.addActor(actorData);
    }


    addActor(actorData: ActorData)
    {
        if(!actorData.skinAvatarConfig)
        {
            console.log(`actorData.skinAvatarConfig=${actorData.skinAvatarConfig}, actorId= ${actorData.id}`);
            return;
        }


        let entity = Entity.poolGet();

        let unit =  entity.addComponent<UnitData>(UnitData);
        unit.unitId = actorData.id;
        unit.unityType = UnitType.Actor;

        let transform = entity.addComponent<TransformData>(TransformData);
        let routeNode = this.scene.path.randomRouteNode();
        transform.position.x = routeNode.x;
        transform.position.y = routeNode.y;
        transform.scale = 1;

        let skeleton = entity.addComponent<SkeletonData>(SkeletonData);
        if(actorData.skinAvatarConfig)
        {
            skeleton.skeletonPathF = actorData.skinAvatarConfig.modelBoneUrlF;
            skeleton.texturePathF = actorData.skinAvatarConfig.modelSkinUrlF;
            skeleton.skeletonPathB = actorData.skinAvatarConfig.modelBoneUrlB;
            skeleton.texturePathB = actorData.skinAvatarConfig.modelSkinUrlB;
        }

        if(!skeleton.skeletonPathF)
        {
            console.log(`skeleton.skeletonPathF=${skeleton.skeletonPathF}, actorId= ${actorData.id}`);
            return;
        }

        let action = entity.addComponent<UnitActionData>(UnitActionData);
        action.actionId = ActorActionId.idle;

        let movePath = entity.addComponent<MovePathData>(MovePathData);
        movePath.routeNodeId = routeNode.id;

        let cmd = entity.addComponent<UnitCmdData>(UnitCmdData);
        cmd.enableCmds.push(
            UnitCmdType.Idle, 
            UnitCmdType.MovePath,
            UnitCmdType.Group_GotoSitdown, 
            UnitCmdType.BubbleTalk,
        );
        cmd.enableCmds.push(UnitCmdType.BubbleTalk);



        entity.addComponent<ShadowData>(ShadowData);
        entity.addComponent<DragData>(DragData);
        entity.addComponent<ScreenLimitData>(ScreenLimitData);
        entity.addComponent<HierarchyData>(HierarchyData);

        this.addEntity(entity);
    }
}