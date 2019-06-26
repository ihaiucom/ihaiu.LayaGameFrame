import BuildingComponentData from "../../GameModule/DataStructs/BuildingComponentData";
import Pool = Laya.Pool;
import HomeMapUI from "../Extends/SystemModuleHomeMap/HomeMapUI";
import Res from "../../Config/Keys/Res";
import DecorationAnimationHelper from "./MapBuilding/DecorationAnimationHelper";
import LevelAnimationHelper from "./MapBuilding/LevelAnimationHelper";
import SyncHellper from "../../Libs/Helpers/SyncHelper";

export default class MapComponent {
    // 摆件显示组件
    loader: fairygui.GLoader;

    //摆件数据
    componentData: BuildingComponentData;

    get x(): number {
        return this.loader.x;
    }

    get y(): number {
        return this.loader.y;
    }

    get pivotX(): number {
        return this.loader.pivotX;
    }

    get pivotY(): number {
        return this.loader.pivotY;
    }

    get width(): number {
        return this.loader.width;
    }

    get height(): number {
        return this.loader.height;
    }

    addToScene(homeMapUI:HomeMapUI)
    {
        let posX = this.loader.parent.x + this.loader.x;
        let posY = this.loader.parent.y + this.loader.y;

        this.loader.setXY(posX, posY);
        this.loader.displayObject.zOrder = posY;
        // if (this.loader.data == 3) {
        //     homeMapUI.mapTopLayout.addChild(this.loader.displayObject);   
        // } else {
        //     homeMapUI.mapAvatarLayout.addChild(this.loader.displayObject);   
        // }
        homeMapUI.mapAvatarLayout.addChild(this.loader.displayObject);   
    }

    install(loader: fairygui.GLoader ,componentData: BuildingComponentData)
    {
        this.loader = loader;
        this.componentData = componentData;

        this.loader.url = "";
        this.loader.touchable = false;
    }

    private _url = "";
    update(buildId: number, level: string)
    {
        if (this.componentData.level == level) {
            return;
        }

        this.componentData.level = level;
        this.loader.url = Res.getHomeBuildingFurniture(buildId, this.componentData.config[level]);
        this._url = this.loader.url;
    }

    hide()
    {
        this.loader.alpha = 0.0;
        Laya.Tween.clearAll(this.loader);
    }

    showIn()
    {
        this.loader.alpha = 1.0;
        this.showInTween();
    }

    showOut()
    {
        // DecorationAnimationHelper.showIn(this.loader, this.loader.y);
    }

    showReady(buildId: number, level: string)
    {
        this.loader.url = Res.getHomeBuildingFurniture(buildId, this.componentData.config[level]);
        this.loader.alpha = 0.0;
        this.lightTween();
    }

    hideReady()
    {
        this.loader.url = this._url;
        this.loader.alpha = 1.0;
        Laya.Tween.clearAll(this.loader);
    }
    //---------------摆件闪烁动画---------------------------------------
    private lightTween()
    {
        Laya.Tween.to(this.loader, {color: "#282800"}, 700, Laya.Ease.sineInOut);
        Laya.Tween.to(this.loader, {alpha: 1.0}, 700, Laya.Ease.sineInOut, Laya.Handler.create(this, this.darkTween));
    }
    
    private darkTween()
    {
        Laya.Tween.to(this.loader, {color: "#ffffff"}, 1000, Laya.Ease.sineInOut);
        Laya.Tween.to(this.loader, {alpha: 0.0}, 1000, Laya.Ease.sineInOut, Laya.Handler.create(this, this.lightTween));
    }

    //---------------摆件弹出动画---------------------------------------
    private colorFilter = new Laya.ColorFilter();
    private _colorFilters = [];
    get colorFilters()
    {
        if(this._colorFilters.length == 0)
            this._colorFilters.push(this.colorFilter);
        return this._colorFilters;
    }

    private _colorBrightness: number = 0;
    get colorBrightness()
    {
        return this._colorBrightness;
    }

    set colorBrightness(val)
    {
        this._colorBrightness = val;
        this.colorFilter.reset();
        this.colorFilter.adjustColor(val, val, 0, 0);
        this.loader.filters = this.colorFilters;
    }

    private _emptyFilters = [];
    clear()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        this.loader.filters = this._emptyFilters;
    }

    private showInTween()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        Laya.Tween.clearAll(this.loader);

        this.loader.y -= 10;
        this.loader.setScale(0.5, 0.5);
        this.loader.alpha = 0;
        this.colorBrightness = 0;
        Laya.Tween.to(this.loader, { y: this.loader.y + 2 }, 170, Laya.Ease.quadOut, null, 210);
        Laya.Tween.to(this.loader, { y: this.loader.y }, 200, Laya.Ease.quadOut, null, 210 + 170);
        Laya.Tween.to(this.loader, { scaleX: 1, scaleY: 1, alpha: 1 }, 210, Laya.Ease.quadOut, null, 0);
        Laya.Tween.to(this, { colorBrightness: 100 }, 210, Laya.Ease.quadOut, null, 0);
        Laya.Tween.to(this, { colorBrightness: 0 }, 370, Laya.Ease.quadOut, null, 210);
    }
    

    

    private static POOL_SIGN = "MapComponent";

    /** 丢回对象池 */
    public poolRecover()
    {
        Pool.recover(MapComponent.POOL_SIGN, this)
    }

    
    /** 从对象池里获取对象 */
    public static poolGet():MapComponent
    {
        let item = <MapComponent> Pool.getItemByClass(MapComponent.POOL_SIGN, MapComponent)
        return item;
    }
}