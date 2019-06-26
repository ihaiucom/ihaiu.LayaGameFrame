/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HomeMapUIStruct from "../../Generates/SystemModuleHomeMap/HomeMapUIStruct";
import Dictionary from "../../../Libs/Helpers/Dictionary";
import Game from "../../../Game";
import StringUtils from "../../../Libs/Helpers/StringUtils";
import MapBuilding from "../../Customs/MapBuilding";
import BuildingModel from "../../../GameModule/DataModels/BuildingModel";
import BuildingButtonBar from "./BuildingButtonBar";
import HomeWindowUI from "../SystemModuleHome/HomeWindowUI";
import { MenuId } from "../../../GameModule/MenuId";
import Event = Laya.Event;
import Res from "../../../Config/Keys/Res";
import MapBuildingItem from "../../Customs/MapBuildingItem";
import Scene2D from "../../../Home/Scene2D";
import GameEventKey from "../../../GameEventKey";
import Mathf from "../../../Libs/Mathf";
import MapUILayout from "../../../Home/UnityViews/MapUILayout";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import BuildingLockTitle from "./BuildingLockTitle";
import BuildingRegionData from "../../../GameModule/DataStructs/BuildingRegionData";
import MapRegion from "../../Customs/MapRegion";
import MapRegionManager from "../../Customs/MapRegionManager";
import MapComponentManager from "../../Customs/MapComponentManager";
import BuildingInfo from "../../Customs/BuildingInfo";
import HomeScene from "../../../Home/HomeScene";
import { PathFinding } from "../../../Libs/PathFinding/PathFinding";
import MapEffectManager from "../../Customs/MapEffectManager";
import SyncHellper from "../../../Libs/Helpers/SyncHelper";

export default class HomeMapUI extends HomeMapUIStruct
{
    mapRegionManager: MapRegionManager = new MapRegionManager();
    mapComponentManager: MapComponentManager = new MapComponentManager();
    mapEffectManager: MapEffectManager = new MapEffectManager();

    private _scene2D: Scene2D;
    get scene2D(): Scene2D
    {
        return this._scene2D;
    }

    set scene2D(scene: Scene2D)
    {
        this._scene2D = scene;
        this.buildingButtonBar.scene2D = scene;
    }
    
    // 地图UI层
    get mapUILayout(): MapUILayout
    {
        return this.scene2D.layoutUI;
    }

    // 地图顶层
    get mapTopLayout(): Laya.Sprite
    {
        return this.scene2D.layoutTop;
    }

    // 地图部件层
    get mapAvatarLayout(): Laya.Sprite
    {
        return this.scene2D.layoutAvatar;
    }

    // 地图寻路管理层
    mapPath: PathFinding;
    

    
    private buildingDict: Dictionary<int, MapBuilding> = new Dictionary<int, MapBuilding>();
    private buildingList: MapBuilding[] = [];
    get buildings(): MapBuilding[]
    {
        return this.buildingList;
    }
    

    // 建筑数据模型
    public _buildingModel: BuildingModel;
    set buildingModel(val: BuildingModel)
    {
        if(this._buildingModel)
        {
            this.removeListen();
        }  

        this._buildingModel = val;

        if(this._buildingModel && this.isShowed)
        {
            this.addListen();
        }
        // this.refresh();
    }
    
    get buildingModel():BuildingModel
    {
        return this._buildingModel
    }

    
    // 是否是自己的家园
    get isMySelfHome(): boolean
    {
        return true;
    }



    // HomeWindowUI
    public get homeWindowUI(): HomeWindowUI
    {
        let menuCtl =Game.menu.getMenuCtl(MenuId.Home);
        if(!menuCtl || !menuCtl.moduleWindow || !menuCtl.moduleWindow.contentPane) return;
        return <HomeWindowUI>menuCtl.moduleWindow.contentPane;
    }

    // 建筑按钮栏
    private _buildingButtonBars:BuildingButtonBar;
    public get buildingButtonBar():BuildingButtonBar
    {
        return this.homeWindowUI.m_buildingButtonBar;
    }

    public showBuildingButtonBar(mapBuiilding: MapBuilding)
    {
        this.buildingButtonBar.show(mapBuiilding, this);
    }

    // 获取建筑
    public getBuilding(buildingId:int):MapBuilding
    {
        return this.buildingDict.getValue(buildingId);
    }

    public getBuildingPos(buildingId:int): Laya.Point
    {
        let item = this.getBuilding(buildingId);
        if(item)
        {
            return item.scenePos;
        }
        return null;
    }

    

    // 地图上层索引
    CHILD_INDEX_MAP = 0;

	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        // this.m_map.url = Res.getHomeMap();
        
        this.CHILD_INDEX_MAP = this.numChildren;

        this.initMapBuildings();        
        this.on(Event.MOUSE_DOWN, this, this.onMouseDownMap);
        Laya.stage.on(Event.MOUSE_UP, this, this.onMouseUpMap);
        Laya.stage.on(Event.MOUSE_WHEEL, this, this.onMouseMoveMap);
    }

    initMapBuildings()
    {
        let configList = Game.config.building.getConfigList();
        for(let config of configList)
        {
            let item = new MapBuilding();
            item.buildingId = config.id;

            let idstr = StringUtils.FillLeft(config.id.toString(), 2)
            item.nameLabel = this[`m_buildingName_${idstr}`];
            item.picComponent = this[`m_buildingPic_${idstr}`];
            item.pic = <fairygui.GLoader> item.picComponent.getChild("icon");
            item.picHit =  item.picComponent.getChild("hit");
            item.info   =  new BuildingInfo();
            item.info.displayObject = item.picComponent.getChild("info");
            item.lockTitle = <BuildingLockTitle> item.picComponent.getChild("lockTitle");
            item.scenePos.x = item.picComponent.x;
            item.scenePos.y = item.picComponent.y;
            item.init(this);
            
            let regionConfis = Game.config.buildingRegion.getConfigsByBuildingType(config.id);
            for (let i = 0; i < regionConfis.length; i++) {
                let mapRegion = MapRegion.poolGet();
                
                mapRegion.install(item, BuildingRegionData.Create(regionConfis[i]));
                this.mapRegionManager.addRegion(regionConfis[i].id, mapRegion);
            }

            this.buildingDict.add(item.buildingId, item);
            this.buildingList.push(item);
        }
    }

    // ==========================================
    // 交互 -- Begin
    //-------------------------------------------

    private mouseDownMapBuiilding: MapBuilding
    onMouseDownMapBuilding(mouseDownMapBuiilding: MapBuilding)
    {
        this.mouseDownMapBuiilding = mouseDownMapBuiilding;
    }
    
    private mousePos = new Laya.Point();
    private mousePos2 = new Laya.Point();
    onMouseDownMap(e:Event)
    {
        if(!this.buildingButtonBar)
            return;
        
        this.buildingButtonBar.hide();

        this.mousePos.x = e.stageX;
        this.mousePos.y = e.stageY;
        
        Laya.stage.on(Event.MOUSE_MOVE, this, this.onMouseMoveMap);
    }

    onMouseUpMap(e:Event)
    {
        Laya.stage.off(Event.MOUSE_MOVE, this, this.onMouseMoveMap);
        this.mouseDownMapBuiilding = null;
    }

    onMouseMoveMap(e:Event)
    {
        this.mousePos2.x = e.stageX - this.mousePos.x;
        this.mousePos2.y = e.stageY - this.mousePos.y;
        let distance = Mathf.distanceangle(0, 0, this.mousePos2.x, this.mousePos2.y);
        if(distance > 0.1)
        {
            if(this.buildingButtonBar)
                this.buildingButtonBar.hide();

            if(this.mouseDownMapBuiilding)
                this.mouseDownMapBuiilding.onMouseMove();
        }
    }

    //-------------------------------------------
    // 交互 -- End
    // ==========================================



    /** 刷新视图 */
    refresh()
    {
        if(!this.buildingModel)
            return;

        if(this.isMySelfHome)
            this.installBuildingItems();
        else
            this.uninstallBuildingItems();
        
        for(let item of this.buildingList)
        {   
            let buildingData = this.buildingModel.getBuilding(item.buildingId);                      
            item.refresh(buildingData);
            if (buildingData.builded && !buildingData.buildingOrUpleveing) {
                item.buildingItem.update(buildingData);  
            }
            item.buildAndLevelAndItemBubble.addToScene(this);
            item.buildAndLevelAndBreakEffect.addToScene(this)
            item.info.addToScene(this);
            this.onBuildingOrUplevelingChange(item.buildingData);
        }

        this.onBuildingShake(Game.moduleModel.building.nextOrder);
    }

    /** 安装建筑生产物品和区域 */
    installBuildingItems()
    {
        for(let building of this.buildingList)
        {
            if (!building.buildingItem) {
                let item = MapBuildingItem.poolGet();
                item.install(building, this);
                building.buildingItem = item;
            }
        }
    }
    

    /** 卸载建筑生产物品 */
    uninstallBuildingItems()
    {
        for(let building of this.buildingList)
        {
            if(building.buildingItem)
            {
                building.buildingItem.uninstall();
                building.buildingItem = null;
            }
        }
    }

    // 建筑预览
    onBuildingPreView(id: number, view: boolean)
    {
        let building: MapBuilding = this.getBuilding(id);
        building.preViewPic(view);
    }

    
    // 建筑改变
    onBuildingChange(data: BuildingData)
    {
        Game.event.dispatch(GameEventKey.Home_SendSceneZoomBuildingExit);

        let building: MapBuilding = this.getBuilding(data.id);
        if(building)
        {
            building.refresh(data);
            building.successClose(data);
            if (data.builded && !data.buildingOrUpleveing) {
                building.buildingItem.update(data);   
            }
        }

        
    }

    // 建筑关闭气泡
    onLevelUp(data: BuildingData)
    {
        let building: MapBuilding = this.getBuilding(data.id);
        if(building)
        {
            this.scene2D.movieToBuilding(building.buildingId);
            building.buildAndLevelAndItemBubble.visible = false;   
        }
    }

    // 建筑关闭气泡
    onWindowClose(data: BuildingData)
    {
        Game.event.dispatch(GameEventKey.Home_SendSceneZoomBuildingExit);

        let building: MapBuilding = this.getBuilding(data.id);
        if(building)
        {
            building.hideNextRegion();
            this.scene2D.movieToBuilding(building.buildingId);
        }
    }

    // 领取产出
    onGetProduct(msg: any)
    {
        let building: MapBuilding = this.getBuilding(msg.buildType);
        if(building)
        {
            building.buildingItem.getProduct(msg.productInfo);
            building.buildingItem.update(building.buildingData);
        }
    }

    // 建筑 抖动
    onBuildingShake(nextOrder: number)
    {
        let nextid: number = Game.config.building.getBuildingIdByOrder(nextOrder);
        let nextbuilding: MapBuilding = this.getBuilding(nextid);
        if (!nextbuilding.buildingData.builded) {
            nextbuilding.refresh(nextbuilding.buildingData);
            nextbuilding.playShakeAction();
        }
    }

    // 建筑 正在建造中
    onBuildingOrUplevelingChange(data: BuildingData)
    {
        let item: MapBuilding = this.getBuilding(data.id);
        if(item)
        {
            item.playBuildEffect();
            item.info.update(item);
            item.info.stateChange();
        }
    }

    // 更新状态
    stateChange()
    {
        for (let i = 0; i < this.buildings.length; i++) {
            let building = this.buildings[i];
            if (building.buildingData && building.buildingData.openTypeByLvAndOrder) {
                building.stateChange(); 
            }
        }
    }

    // 聚焦建筑
<<<<<<< HEAD
    focusBuilding(buildingId: number)
    {
        this.scene2D.movieToBuilding(buildingId);
        let item: MapBuilding = this.getBuilding(buildingId);
        if(item)
        {
            item.onMouseClick();
=======
    async focusBuilding(buildingId: number, time: number = 200)
    {
        this.scene2D.movieToBuilding(buildingId, 0, 0, time);
        await SyncHellper.waitTime(time / 1000);
        let item: MapBuilding = this.getBuilding(buildingId);
        if(item)
        {
            item.isCorrectOperation = true;
            item.onMouseClick();
            item.isCorrectOperation = false;
>>>>>>> 763e47688731cedc4ce4567a4a3c07dbe27fce07
        }
    }


    // 添加事件监听
    private addListen()
    {
        if(this._buildingModel)
        {
            this._buildingModel.sBuildingOrUplevelingChange.add(this.onBuildingOrUplevelingChange, this);
            this._buildingModel.sBuildingNew.add(this.onBuildingShake, this);
            this._buildingModel.sStateChange.add(this.stateChange, this);
        }
        Game.event.add(GameEventKey.Build_CloseSuccessDialog, this.onBuildingChange, this);
        Game.event.add(GameEventKey.Build_LevelUp, this.onLevelUp, this);
        Game.event.add(GameEventKey.Build_CloseWindow, this.onWindowClose, this);
        Game.event.add(GameEventKey.Build_FocusBuilding, this.focusBuilding, this);
<<<<<<< HEAD
=======

>>>>>>> 763e47688731cedc4ce4567a4a3c07dbe27fce07
        Game.net.buildGetProductS2C.on(this.onGetProduct, this);
    }

    // 移除事件监听
    private removeListen()
    {

        if(this._buildingModel)
        {
            this._buildingModel.sBuildingOrUplevelingChange.remove(this.onBuildingOrUplevelingChange, this);
            this._buildingModel.sBuildingNew.remove(this.onBuildingShake, this);
            this._buildingModel.sStateChange.remove(this.stateChange, this);
        }
        Game.event.remove(GameEventKey.Build_CloseSuccessDialog, this.onBuildingChange, this);
        Game.event.remove(GameEventKey.Build_LevelUp, this.onLevelUp, this);
        Game.event.remove(GameEventKey.Build_CloseWindow, this.onWindowClose, this);
        Game.event.remove(GameEventKey.Build_FocusBuilding, this.focusBuilding, this);
        Game.net.buildGetProductS2C.off(this.onGetProduct, this);
    }

    start(scene: HomeScene)
    {
        this.mapPath = scene.path;
        this.mapRegionManager.install(this);
        this.mapComponentManager.install(this);
<<<<<<< HEAD
        this.mapEffectManager.install(this);
=======
>>>>>>> 763e47688731cedc4ce4567a4a3c07dbe27fce07

        this.m_actorShade1.displayObject.zOrder = this.m_actorShade1.y;
        this.mapAvatarLayout.addChild(this.m_actorShade1.displayObject); 
        this.m_actorShade2.displayObject.zOrder = this.m_actorShade2.y;
        this.mapAvatarLayout.addChild(this.m_actorShade2.displayObject);
        this.m_actorShade3.displayObject.zOrder = this.m_actorShade3.y;
        this.mapAvatarLayout.addChild(this.m_actorShade3.displayObject);  

        this.refresh();
    }
    

    private isShowed = false;
    // 窗口显示
    onWindowShow(): void
    {
        this.isShowed = true;

        this.addListen();
        this.stateChange();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.isShowed = false;
        
        this.removeListen();
    }

}