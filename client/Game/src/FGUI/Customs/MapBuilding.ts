import HomeMapUI from "../Extends/SystemModuleHomeMap/HomeMapUI";
import Event = Laya.Event;
import FguiHelper from "../../Libs/Helpers/FguiHelper";
import Game from "../../Game";
import { MenuId } from "../../GameModule/MenuId";
import { BuildingTabType } from "../Extends/ModuleBuildingGJC/BuildingWindowUIGJC";
import BuildingBubble from "../Extends/SystemModuleHomeMap/BuildingBubble";
import BuildingData from "../../GameModule/DataStructs/BuildingData";
import BuildingLockTitle from "../Extends/SystemModuleHomeMap/BuildingLockTitle";
import TEXT from "../../Config/Keys/TEXT";
import Dictionary from "../../Libs/Helpers/Dictionary";
import MapBuildingItem from "./MapBuildingItem";
import MsgKey from "../../Config/Keys/MsgKey";
import BuildingEffect from "../Extends/SystemModuleHomeMap/BuildingEffect";
import GameEventKey from "../../GameEventKey";
import ParticleGroup from "../../Libs/Helpers/ParticleGroup";
import R from "../../Config/Keys/R";
import SpriteShake from "../../Libs/Helpers/SpriteShake";
import BuildingRegionData from "../../GameModule/DataStructs/BuildingRegionData";
import DTGiftNum from "../../Config/ConfigExtends/DTGiftNum";
import MapRegion from "./MapRegion";
import BuildingAnimationHelper from "./MapBuilding/BuildingAnimationHelper";
import BuildingInfo from "./BuildingInfo";

/**
 * 地图--建筑
 */
export default class MapBuilding
{
    homeMapUI:HomeMapUI;

    // 建筑ID
    buildingId: int;

    // 建筑数据
    buildingData: BuildingData;

    // 建造中心锚点
    nameLabel:fairygui.GLabel;

    // 建筑组件完整体
    picComponent: fairygui.GComponent;

    // 建筑图片
    pic: fairygui.GLoader;

    // 建筑点击区域
    picHit: fairygui.GObject;

    // 建筑生产物品
    buildingItem: MapBuildingItem;

    // 门牌视图
    info: BuildingInfo;

    // 气泡按钮 -- 可建造/产出
    buildAndLevelAndItemBubble:BuildingBubble;

    // 建筑特效 -- 建造/升级/突破
    buildAndLevelAndBreakEffect:BuildingEffect;

    // 未解锁标志
    lockTitle: BuildingLockTitle;

    // 建筑锚点坐标 -- 相对地图坐标
    anchor: Laya.Point = new Laya.Point();

    // 建筑场景坐标 -- 相对地图坐标
    scenePos: Laya.Point = new Laya.Point();

    localToGlobal(x: number, y: number): Laya.Point
    {
        return this.nameLabel.localToGlobal(x, y);
    }

    get nextRegionPos(): Laya.Point
    {
        //区域偏移---------------
        let dx = 0; let dy = 0;
        let regionList = this.homeMapUI.mapRegionManager.getRegionList(this.buildingData.nowConfig);
        if (regionList) {
            let minx = 99999; let maxx = -99999;
            let miny = 99999; let maxy = -99999;
            for (let i = 0; i < regionList.length; i++) {
                let region = regionList[i];

                let leftx = region.x;
                if (minx > leftx) {
                    minx = leftx;
                }

                let rightx = region.x;
                if (maxx < rightx) {
                    maxx = rightx;
                }

                let bottomy = region.y;
                if (miny > bottomy) {
                    miny = bottomy;
                }
                let topy = region.y;
                if (maxy < topy) {
                    maxy = topy;
                } 
            }
            dx = (minx + maxx) / 2;
            dy = (miny + maxy) / 2;
        }

        return (new Laya.Point(dx, dy));
    }

    /**
     * 是否已建造
     */
    get isBuilded(): boolean
    {
        if(this.buildingData && this.buildingData.builded)
        {
            return true;
        }
        return false;
    }

    /**
     * 初始化
     * @param homeMapUI 
     */
    init(homeMapUI:HomeMapUI)
    {
        this.homeMapUI = homeMapUI;
        this.nameLabel.visible = false;
        this.anchor.x = this.nameLabel.x;
        this.anchor.y = this.nameLabel.y;

        let buildAndLevelAndItemBubble = BuildingBubble.createInstance();
        buildAndLevelAndItemBubble.setXY(this.anchor.x, this.anchor.y);
        buildAndLevelAndItemBubble.init(this);
        this.buildAndLevelAndItemBubble = buildAndLevelAndItemBubble;

        let buildAndLevelAndBreakEffect = BuildingEffect.createInstance();
        buildAndLevelAndBreakEffect.setXY(0, 0);
        buildAndLevelAndBreakEffect.init(this);
        this.buildAndLevelAndBreakEffect = buildAndLevelAndBreakEffect;

        this.picHit.setPivot(0, 0);
        this.picHit.setXY(this.picHit.width * -0.5, this.picHit.height * -0.5);
        if(this.picComponent.displayObject && this.picComponent.displayObject.hitArea)
        {
            this.picComponent.displayObject.hitArea.offsetX = this.picHit.width * -0.5;
            this.picComponent.displayObject.hitArea.offsetY = this.picHit.height * -0.5;
        }
        this.picComponent.onClick(this, this.onMouseClick);
        this.picComponent.on(Event.MOUSE_DOWN, this, this.onMouseDown);
    }

    // 关闭成功Dialog
    successClose(buildingData: BuildingData)
    {
        switch (buildingData.successType) {
            case 0:
                this.showPic();
                Laya.timer.once(350, this, this.showRegions);
                // this.showNextRegion(1250);
                break;
            case 1:
                this.showRegions();
                // this.showNextRegion(900);
                break;
            case 2:
                this.showPic();  
                // this.showNextRegion(350);
                break;
        
            default:
                break;
        }
    }

    showPic(animation: boolean = true)
    {
        if (animation) {
            BuildingAnimationHelper.showIn(this.pic, this._buildingPic)            
        } else {
            this.pic.url = this._buildingPic;
        }
    }

    showRegions()
    {
        let regionDatas = this.buildingData.nowBuildingRegionDatas;
        this.homeMapUI.mapRegionManager.update(regionDatas);
        for (let i = 0; i < this._regionList.length; i++) {
            this._regionList[i].showIn();
            this.homeMapUI.mapEffectManager.removeEffect(this._regionList[i].regionData.buildId, this._regionList[i].regionData.level);    
        }
    }


    private _show: boolean = false;
    showNextRegion()
    {
        this._show = true;
        this.homeMapUI.mapRegionManager.regionReadyShow(this.buildingData.nextLevelConfig);
    }

    hideNextRegion()
    {
        if (this._show) {
            this.homeMapUI.mapRegionManager.regionReadyHide(this.buildingData.nextLevelConfig);
        }
    }


    // 正确操作
    isCorrectOperation = false;
    
    /** 
     * 鼠标点击 
     */
    onMouseClick()
    {
        if(this.isCorrectOperation)
        {
            if (this.buildAndLevelAndItemBubble.visible) {
                let state = this.buildAndLevelAndItemBubble.state;
                switch (state) {
                    case 0:
                        this.homeMapUI.scene2D.zoomBuildingEnter(this.buildingId);
                        Game.menu.openTab(MenuId.BuildingInfo, BuildingTabType.Build, this.buildingData);
                        break;
                    case 1:
                        this.buildAndLevelAndItemBubble.visible = false;
                        Game.sender.building.buildingGetProductItem(this.buildingData.id);
                        break;
                    case 2:
                        this.buildAndLevelAndItemBubble.visible = false;
                        this.homeMapUI.scene2D.movieToBuilding(this.buildingId);
                        Game.sender.building.buildingEndOfLevelUp(this.buildingData.id);
                        break;
                }
            } else {
                if (!this.buildingData.builded && this.buildingData.userLevelRequest) {
                    Game.system.toastMsg(MsgKey.build_non_level, this.buildingData.userLevelRequest);
                } else {
                    this.showButtonBar();
                }
            }
        }
    }
    
    /** 
     * 鼠标按下
     */
    onMouseDown()
    {
        this.homeMapUI.onMouseDownMapBuilding(this);
        this.isCorrectOperation = true;
    }

    /** 
     * 鼠标移动
     */
    onMouseMove()
    {
        this.isCorrectOperation = false;
    }

    /** 
     * 显示按钮栏
     */
    showButtonBar()
    {
        this.homeMapUI.showBuildingButtonBar(this);
    }

    /** 
     * 隐藏按钮栏
     */
    onHideButtonBar()
    {
        Laya.timer.clear(this, this.showButtonBar);
    }

    /** 
     * 刷新视图
     */
    refresh(buildingData: BuildingData)  
    {
        this.buildingData = buildingData;
        this.refreshBubble(buildingData.openTypeByLvAndOrder);
        this.refreshBuilding();
    }

    private _opentype = null;
    /**
     * 刷新图片和气泡
     * @param opentype 
     */
    refreshBubble(opentype: number)
    {
        switch (opentype) {
            case 0:
                this.picComponent.visible = this.buildingData.openRegion;
                this.lockTitle.m_labTitle.text = format(TEXT.AssistantUnlockTag, this.buildingData.nowConfig.levelReq);
                this.buildAndLevelAndItemBubble.visible = false;
                break;
            case 1:
                this.picComponent.visible = true;
                this.lockTitle.m_labTitle.text = format(TEXT.AssistantUnlockTag, this.buildingData.nowConfig.levelReq)
                this.lockTitle.setVisible(!!this.buildingData.userLevelRequest);
                this.buildAndLevelAndItemBubble.visible = !this.buildingData.userLevelRequest;
                this.buildAndLevelAndItemBubble.buildingData = this.buildingData;
                break;
            case 2:
                this.picComponent.visible = true;
                this.lockTitle.setVisible(false);
                this.buildAndLevelAndItemBubble.visible = false;
                this.buildAndLevelAndItemBubble.buildingData = this.buildingData;
                break;
            default:
                break;
        }
    }

    private _noBre:boolean= null;    
    private _level:number = null;
    /**
     * 刷新建筑
     */
    refreshBuilding()
    {
        if (!this.buildingData.builded) {
            this._isFirst = false;
            return;
        }

        if (this._noBre != this.buildingData.isNoBre) {
            this._noBre = this.buildingData.isNoBre;
            this.refreshPic();
        }

        if (this._level != this.buildingData.level) {
            this._level = this.buildingData.level;
            this.refreshRegionList();
        }
    }

    private _buildingPic: string;
    /**
     * 刷新地板
     */
    refreshPic()
    {
        this._buildingPic = this.buildingData.pic;
        let buildingList = this.homeMapUI.mapRegionManager.getBuildingList(this.buildingData.levelConfig);
        for (let i = 0; i < buildingList.length; i++) {
            // buildingList[i].hide();
        }
    }

    private _isFirst:boolean = true;
    private _regionList: Array<MapRegion> = [];
    /**
     * 刷新家具
     */
    refreshRegionList()
    {
        if (this._isFirst) {
            this._isFirst = false;
            this.showRegions();
            // this.showNextRegion(0);
            this.showPic(false);
        } else {
            let regionList = this.homeMapUI.mapRegionManager.getRegionList(this.buildingData.levelConfig);
            for (let i = 0; i < regionList.length; i++) {
                regionList[i].hide();
            }
            this._regionList = regionList;
        }
    }

    /**
     * 刷新和播放动画
     */
    playBuildEffect()
    {
        this.buildAndLevelAndBreakEffect.visible = false;
        
        if (this.buildingData.buildingOrUpleveing) {
            this.buildingItem.stopProduce();
            let type = this.buildingData.nowBuildType;
            this.buildAndLevelAndBreakEffect.state = type;
            switch (type) {
                case 0:
                    //播放建造中动画
                    console.log("播放建造中动画")
                    // this.buildAndLevelAndBreakEffect.setVisible(Game.time.serverSeconds < this.buildingData.buildingOrUpleveingTimestamp);
                    this.buildAndLevelAndBreakEffect.setXY(this.anchor.x - 100, this.anchor.y);
                    break;
                case 1:
                    //播放升级中动画
                    this.homeMapUI.mapRegionManager.regionShow(this.buildingData.nextLevelConfig);
                    this.buildAndLevelAndBreakEffect.setXY(this.anchor.x - 100, this.anchor.y);   
                    // if (time) {
                        
                    // } else {
                    //     this.homeMapUI.mapRegionManager.regionShow(this.buildingData.nextLevelConfig, time * 1000);
                    // }
                    break;
                case 2:
                    //播放突破中动画
                    console.log("播放突破中动画")
                    // this.buildAndLevelAndBreakEffect.setXY(0, 0);
                    break;

                default:
                    break;
            }
            this.buildAndLevelAndBreakEffect.setVisible(true);
        } else {
            
        }
    }

    /**
     * 状态变化
     */
    stateChange()
    {
        if (this.buildingData.openTypeByLvAndOrder == 1) {
            this.refreshBubble(1);
        } else {
            this.info.stateChange();            
        }
    }

    /** 预览建筑 */
    preViewPic(view: boolean)
    {
        if (view) {
            this.pic.url = this.buildingData.picBre;
        } else {
            this.pic.url = this.buildingData.pic;
        }
    }

    //---------------锁抖动动画-----------------------------------------
    playShakeAction()
    {
        this.lockTitle.playShakeAction();
    }
}