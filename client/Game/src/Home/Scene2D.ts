import Handler = Laya.Handler;
import Event = Laya.Event;
import Rectangle = Laya.Rectangle;
import Sprite = laya.display.Sprite;
import Point = Laya.Point;
import Tween = Laya.Tween;
import Ease = Laya.Ease;
import HomeMap from "./HomeMap";
import Scene2DDragCtrl from "./Scene2DDragCtrl";
import Scene2DZoomCtrl from "./Scene2DZoomCtrl";
import Scene2DMoveTween from "./Scene2DMoveTween";
import Mathf from "../Libs/Mathf";
import Random from "../Libs/Helpers/Random";
import HomeMapUI from "../FGUI/Extends/SystemModuleHomeMap/HomeMapUI";
import Signal from "../Libs/signals/Signal";
import Game from "../Game";
import GameEventKey from "../GameEventKey";
import { BuildingType } from "../GameModule/DataEnums/BuildingType";
import GrideView from "./GrideView";
import MapUILayout from "./UnityViews/MapUILayout";
import BitHelper from "../Libs/Helpers/BitHelper";
import Scene2DBoundaryMoveCtrl from "./Scene2DBoundaryMoveCtrl";
import { PathFinding } from "../Libs/PathFinding/PathFinding";
import R from "../Config/Keys/R";
import ParticleGroup from "../Libs/Helpers/ParticleGroup";

/** 操作模式 */
export enum OperationModel
{
    /** 所有的都不可以操作 */
    Disable = 0,
    /** 可以拖拽移动 */
    DragMove = 1,
    /** 可以缩放 */
    Zoom = 2,
    /** 可以边界移动 */
    BoundaryMove = 4,
    /** 正在做Tween */
    Tweening = 8,

    /** 可以拖拽和缩放 */
    DragAndZoom = 3
}

window['OperationModel'] = OperationModel;

export default class Scene2D extends Sprite
{

    static uiTweenZoomBegin = 0.65;
    static uiTweenZoomEnd = 0.70;

    private _debugPoint: Sprite;
    get debugPoint():Sprite
    {
        if(!this._debugPoint)
        {
            let s = new Sprite();
            s.graphics.drawCircle(0, 0, 5, "#FF0000FF", "#000000", 1);
            this.addChild(s);
            this._debugPoint = s;
        }
        return this._debugPoint;
    }


    _elasticDistance = 100;
    dragRegion: Rectangle = new Rectangle();
    // 边界回弹缩放
    minScale = 0.5;
    maxScale = 1.8;
    // 缩放速度--手指操作
    zoomOpTouchFactor = 0.0007;
    // 缩放速度--鼠标滚轮
    zoomOpMouseWheelFactor = 0.1;

    defaultScale = 1.0;
    // 最小(大)缩放
    minScaleSource = 0.8;
    maxScaleSource = 5;

    // map2: HomeMap = new HomeMap();
    map: HomeMapUI;
    boundaryMoveCtrl: Scene2DBoundaryMoveCtrl = new Scene2DBoundaryMoveCtrl();
    dragCtrl: Scene2DDragCtrl = new Scene2DDragCtrl();
    zoomCtrl: Scene2DZoomCtrl = new Scene2DZoomCtrl();
    moveTween: Scene2DMoveTween = new Scene2DMoveTween();

    operationMode: OperationModel = OperationModel.DragAndZoom;
    getEnableOperation(type:OperationModel): boolean
    {
        return BitHelper.Contain(this.operationMode, type);
    }

    private _isTweening: boolean = false;
    get isTweening(): boolean
    {
        return this._isTweening;
    }

    set isTweening(val: boolean)
    {
        this._isTweening = val;
        if(val)
        {
            this.operationMode = OperationModel.Tweening;
        }
        else
        {
            this.operationMode = OperationModel.DragAndZoom;
        }
    }

    
    get scaleWidth()
    {
        return this.width * this.scaleX;
    }

    get scaleHeight()
    {
        return this.height * this.scaleY;
    }

    get elasticDistance()
    {
        return this._elasticDistance * this.scaleX;
    }

    get zoom()
    {
        return this.scaleX;
    }

    set zoom(value: number)
    {
        this.zoomTo(value, 0);
    }
    
    get zoomRate(): number
    {
        return this.zoom / (this.maxScaleSource - this.minScaleSource);
    }

    
   set zoomRate(value: number)
   {
       let scale = value * (this.maxScaleSource - this.minScaleSource);
       this.zoom = scale;
   }

   // 能否操作UI
   get zoomEnableUI()
   {
       return !this.isZoomBuildingEnter && this.zoomRate < Scene2D.uiTweenZoomEnd;
   }

    setScales(value: number)
    {
        this.scale(value, value);
        Game.event.dispatch(GameEventKey.Home_SceneZoomChange, this.zoomRate);
    }

    onZoomEnd()
    {
        if (this.layoutUI && !this.isZoomBuildingEnter) {
            this.layoutUI.visible = this.zoomRate < Scene2D.uiTweenZoomEnd;
        }
        
        Game.event.dispatch(GameEventKey.Home_SceneZoomEnd, this.zoomRate);
    }


    test()
    {
        Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onTestKeyDown);
    }

    async onTestKeyDown(e:Laya.Event)
    {
        
		let arr = [
			R.particles.FlyExp,
        ];
        
		let group = new ParticleGroup();
		await group.init(this, arr);
		group.addToContainerTop();
		group.generateHelperPoint();
		group.x = this.getCenter().x;
		group.y = this.getCenter().y;
		group.play();
		window["group"] = group;
      
    }



    grideView:GrideView;
    layoutShadow: Sprite;
    layoutAvatar: Sprite;
    layoutTop: Sprite;
    layoutUI:MapUILayout;

    install()
    {
        window['scene2D'] = this;
        //// this.map2.install();
        // this.map2.load();
        // this.width  = this.map2.width;
        // this.height = this.map2.height;
        // this.addChild(this.map2);
        
        this.map = HomeMapUI.createInstance();
        if(this.map)
        {
            this.map.scene2D = this;
            this.width  = this.map.width;
            this.height = this.map.height;
            this.addChild(this.map.displayObject);
        }


        // this.minScaleSource = Math.max(Laya.stage.width / (this.width - this.elasticDistance * 2), Laya.stage.height / (this.height - this.elasticDistance * 2) );
        // this.minScale = this.minScaleSource * 1.1;
        this.maxScaleSource = this.maxScale * 1.6;
        this.refreshRegion();

        this.boundaryMoveCtrl.install(this);

        this.dragCtrl.install(this);

        // this.dragCtrl.center();
        
        this.zoomCtrl.install(this);

        this.moveTween.install(this);


        // this.grideView = new GrideView();
        // this.grideView.width = this.width;
        // this.grideView.height = this.height;
        // this.grideView.refresh();
        // this.addChild(this.grideView);

        this.layoutShadow = new Sprite();
        this.layoutAvatar = new Sprite();
        this.layoutTop = new Sprite();
        this.layoutUI = new MapUILayout();
        this.layoutUI.install(this);
        this.layoutShadow.mouseEnabled = false;
        this.layoutAvatar.mouseEnabled = true;
        this.layoutUI.touchable = true;
        this.layoutUI.opaque = true;

        this.addChild(this.layoutShadow);
        this.addChild(this.layoutAvatar);
        this.addChild(this.layoutTop);
        this.addChild(this.layoutUI.displayObject);
        this.map.m_map.installDecoration(this.layoutAvatar);


        // 场景Exit移动到建筑，并显示主界面UI
        Game.event.add(GameEventKey.Home_SendSceneZoomBuildingExit, this.zoomBuildingExit, this);
        // 拖到单位，开始
        Game.event.add(GameEventKey.Home_DragUnitEnter, this.onDragUnitEnter, this);
        // 拖到单位，结束
        Game.event.add(GameEventKey.Home_DragUnitExit, this.onDragUnitExit, this);

        // 移动中心点
        // this.movieTo(this.width * 0.5, this.height * 0.5, this.defaultScale, 0);
        this.movieToBuilding(BuildingType.ShootingCenter, 0, 0, 0, this.defaultScale);

        this.test();
    }

    dragUnitNum = 0;
    onDragUnitEnter()
    {
        this.stop();
        this.dragUnitNum ++;
        this.operationMode = OperationModel.BoundaryMove;
        this.boundaryMoveCtrl.start();
    }

    onDragUnitExit()
    {
        this.dragUnitNum --;
        if(this.dragUnitNum <= 0)
        {
            this.dragUnitNum = 0;
            this.operationMode = OperationModel.DragAndZoom;
            this.boundaryMoveCtrl.stop();
        }

    }

    
    refreshRegion()
    {
        let w = this.scaleWidth;
        let h = this.scaleHeight;
        
        let dragWidthLimit: number  = w     - this.elasticDistance * 2  - Laya.stage.width ;
        let dragHeightLimit: number = h     - this.elasticDistance * 2  - Laya.stage.height ;
       
        
        let dragRegion = this.dragRegion;
        dragRegion.x = -dragWidthLimit -this.elasticDistance ;
        dragRegion.y = -dragHeightLimit -this.elasticDistance;
        dragRegion.width = dragWidthLimit;
        dragRegion.height = dragHeightLimit;

        if(w < Laya.stage.width)
        {
            dragRegion.x = (Laya.stage.width - w) >> 1;
            dragRegion.width = 0;
        }

        if(h < Laya.stage.height)
        {
            dragRegion.x = (Laya.stage.height - h) >> 1;
            dragRegion.height = 0;
        }
    }

    
    checkArea(pos: Point)
    {
        this.refreshRegion();

        if(pos.x < this.dragRegion.x)
        {
            pos.x = this.dragRegion.x;
        }
        else if(pos.x > this.dragRegion.x + this.dragRegion.width)
        {
            pos.x = this.dragRegion.x + this.dragRegion.width;
        }

        
        if(pos.y < this.dragRegion.y)
        {
            pos.y = this.dragRegion.y;
        }
        else if(pos.y > this.dragRegion.y + this.dragRegion.height)
        {
            pos.y = this.dragRegion.y + this.dragRegion.height;
        }
    }

    stop()
    {
        this.boundaryMoveCtrl.stop();
        this.dragCtrl.stop();
        this.zoomCtrl.stop();
        this.moveTween.stop();
    }
    
    // 缩放地图到默认大小
    zoomToDefault()
    {
        this.zoomTo(this.defaultScale);
    }

    zoomTo(zoom: number, duration: number = 200)
    {
        let pos = this.getCenter();
        this.movieTo(pos.x, pos.y, zoom);
    }

    // 移动到建筑
    movieToBuilding(buildingId: BuildingType, offsetX: number = 0, offsetY: number = 0, duration: number = 200, scale?: number)
    {
        (scale == void 0) && (scale = this.defaultScale);
        let pos = this.map.getBuildingPos(buildingId);
        if(pos)
        {
            this.movieTo(pos.x + offsetX, pos.y + offsetY, scale, duration);
        }
    }

    private isZoomBuildingEnter = false;
    private zoomBuildingEnterPos = new Point();
    private zoomBuildingEnterZoom = 1;
    // 移动到建筑，并隐藏主UI, Enter
    zoomBuildingEnter(buildingId: BuildingType, dx: number = 0, dy: number = 0, offsetY: number = 200, duration: number = 200, scale?: number)
    {
        this.isZoomBuildingEnter = true;
        let p = this.getCenter();
        this.zoomBuildingEnterPos.x = p.x;
        this.zoomBuildingEnterPos.y = p.y;
        this.zoomBuildingEnterZoom = this.zoom;

        this.layoutUI.visible = false;

        this.movieToBuilding(buildingId, dx, dy + offsetY, duration);
        Game.event.dispatch(GameEventKey.Home_SceneZoomBuildingEnter);
    }

    zoomBuildingExit(duration: number = 200)
    {
        this.isZoomBuildingEnter = false;

        this.layoutUI.visible = true;

        // this.movieTo(this.zoomBuildingEnterPos.x, this.zoomBuildingEnterPos.y, this.zoomBuildingEnterZoom, duration);
        Game.event.dispatch(GameEventKey.Home_SceneZoomBuildingExit);
    }



    // 将地图某个点移动到屏幕中间
    movieTo(x: number, y: number, scale: number = -1, duration: number = 500)
    {
        if(scale <= 0) scale = this.zoom;
        // this.debugPoint.x = x;
        // this.debugPoint.y = y;
        this.stop();
        this.moveTween.movieTo(x, y , scale, duration);
    }

    // 获取屏幕中间点坐标
    getCenter(): Point
    {
        let pos = Point.TEMP;
        pos.x = -this.x / this.zoom  + Laya.stage.width * 0.5 / this.zoom;
        pos.y = -this.y / this.zoom  + Laya.stage.height * 0.5 / this.zoom;
        return pos;
    }

    onScreenResize()
    {
        this.refreshRegion();
        this.dragCtrl.center();
    }


}
window['Scene2D'] = Scene2D;