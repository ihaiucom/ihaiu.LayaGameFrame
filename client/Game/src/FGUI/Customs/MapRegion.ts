import MapBuilding from "./MapBuilding";
import BuildingRegionData from "../../GameModule/DataStructs/BuildingRegionData";
import Dictionary from "../../Libs/Helpers/Dictionary";
import StringUtils from "../../Libs/Helpers/StringUtils";
import Pool = Laya.Pool;
import Res from "../../Config/Keys/Res";
import HomeMapUI from "../Extends/SystemModuleHomeMap/HomeMapUI";
import MapComponent from "./MapComponent";
import BuildingComponentData from "../../GameModule/DataStructs/BuildingComponentData";
import Game from "../../Game";
import BuildingLevelConfig from "../../Config/ConfigExtends/BuildingLevelConfig";
import DecorationAnimationHelper from "./MapBuilding/DecorationAnimationHelper";
import SyncHellper from "../../Libs/Helpers/SyncHelper";
import LevelAnimationHelper from "./MapBuilding/LevelAnimationHelper";
import Random from "../../Libs/Helpers/Random";

export default class MapRegion {
    // 区域数据 -- 建筑
    regionData:BuildingRegionData;

    // 区域内家具
    componentDict: Dictionary<number , MapComponent> = new Dictionary<number, MapComponent>();
    componentList: Array<MapComponent> = [];

    displaySprite: Laya.Sprite;
    width: number = 0;
    height:number = 0;

    rect: Laya.Rectangle = new Laya.Rectangle();

    calculateRect()
    {
    }


    

    get x(): number {
        let componentList = this.componentList;

        let minx = 99999;
        let maxx = -99999;
        for (let i = 0; i < componentList.length; i++) {
            let component = componentList[i];
            
            let leftx = component.x - component.pivotX * component.width;
            if (minx > leftx) {
                minx = leftx;
            }   

            let rightx = leftx + component.width;     
            if (maxx < rightx) {
                maxx = rightx;
            } 
        }
        this.width = maxx - minx;
        return (minx + maxx) / 2;
    }

    get y(): number {
        let componentList = this.componentList;

        let miny = 99999;
        let maxy = -99999;
        for (let i = 0; i < componentList.length; i++) {
            let component = componentList[i];
            let bottomy = component.y - component.pivotY * component.height;
            if (miny > bottomy) {
                miny = bottomy;
            }   
            let topy = bottomy + component.height;     
            if (maxy < topy) {
                maxy = topy;
            } 
        }
        this.height = maxy - miny;
        return (miny + maxy) / 2;
    }
    
    install(mapBuilding:MapBuilding, regionData:BuildingRegionData)
    {
        this.regionData = regionData;

        let componentConfigs = Game.config.buildingComponent.getConfigsByIds(regionData.componentGroupId);
        for (let i = 0; i < componentConfigs.length; i++) {
            let name = `${regionData.name}_${StringUtils.FillLeft((i+1).toString(), 2)}`;
            let loader = <fairygui.GLoader> mapBuilding.picComponent.getChild(name);
            let mapComponent = MapComponent.poolGet();
            mapComponent.install(loader, BuildingComponentData.Create(componentConfigs[i]));
            mapBuilding.homeMapUI.mapComponentManager.addComponent(componentConfigs[i].id, mapComponent);

            this.componentDict.add(name, mapComponent);
            this.componentList.push(mapComponent);
        }

        this.displaySprite = new Laya.Sprite();
        this.displaySprite.pos(this.x - this.width / 2, this.y - this.height / 2);
        this.displaySprite.width = this.width;
        this.displaySprite.height = this.height;
        mapBuilding.picComponent.displayObject.addChild(this.displaySprite);
        // if (regionData.id == 17401001) {
        //     this.displaySprite.graphics.drawRect(0, 0, this.width, this.height, "#ff0000");
        //     this.showIn();
        //     window["testMR"] = this;
        // }
        // this.displaySprite.graphics.drawRect(0, 0, this.width, this.height, "#" + Random.range(10, 99) + Random.range(10, 99)+ Random.range(10, 99) + "55" );
    }

    update(regionData: BuildingRegionData)
    {
        this.regionData = regionData;

        let componentList = this.componentList;
        for (let i = 0; i < componentList.length; i++) {
            let component = componentList[i];
            component.update(regionData.buildId ,regionData.level);
        }
    }

    hide()
    {
        let componentList = this.componentList;

        for (let i = 0; i < componentList.length; i++) {
            let component = componentList[i];
            component.hide();
        }
    }

    showReady(regionData: BuildingRegionData)
    {
        let componentList = this.componentList;

        for (let i = 0; i < componentList.length; i++) {
            let component = componentList[i];
            component.showReady(regionData.buildId);
        }
    }

    hideReady()
    {
        let componentList = this.componentList;

        for (let i = 0; i < componentList.length; i++) {
            let component = componentList[i];
            component.hideReady();
        }
    }

    private levelAnimation:any;
    private decorationAnimation: any;
    private _isShow: boolean = false;
    async show(time: number)
    {
        // let componentList = this.componentList;
        // for (let i = 0; i < componentList.length; i++) {
        //     let component = componentList[i];
        //     component.show(time);
        // }
        if (this.decorationAnimation) {
            this.decorationAnimation.clear();
            this.decorationAnimation = null;
        }
        if(time)
        {
            this.decorationAnimation = await DecorationAnimationHelper.showIn(this.displaySprite, time);
        }
        this._isShow = false;
        
        await SyncHellper.waitTime(time);
        if (!this.levelAnimation && this._isShow == false) {
            this._isShow = true;
            this.levelAnimation = await LevelAnimationHelper.showIn(this.displaySprite, true);     
        }
    }

    showIn()
    {
        if (this.levelAnimation) {
            this.levelAnimation.clear();
            this.levelAnimation = null;
        }  
        DecorationAnimationHelper.showIn(this.displaySprite, 1000);
        
        let componentList = this.componentList;
        for (let i = 0; i < componentList.length; i++) {
            let component = componentList[i];
            component.showIn();
        }
    }

    showOut()
    {

    }

    private static POOL_SIGN = "MapRegion";

    /** 丢回对象池 */
    public poolRecover()
    {
        Pool.recover(MapRegion.POOL_SIGN, this)
    }

    
    /** 从对象池里获取对象 */
    public static poolGet():MapRegion
    {
        let item = <MapRegion> Pool.getItemByClass(MapRegion.POOL_SIGN, MapRegion)
        return item;
    }
}