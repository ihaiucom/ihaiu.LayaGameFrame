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
import R from "../../Config/Keys/R";

export default class MapRegion {
    // 区域数据 -- 建筑
    regionData:BuildingRegionData;
    mapBuilding:MapBuilding;

    // 区域内家具
    componentDict: Dictionary<number , MapComponent> = new Dictionary<number, MapComponent>();
    componentList: Array<MapComponent> = [];

    width: number = 0;
    height:number = 0;

    // rect: Laya.Rectangle = new Laya.Rectangle();

    // calculateRect()
    // {
    // }


    

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
        this.mapBuilding = mapBuilding;

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
            component.showReady(regionData.buildId, regionData.level);
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
        
    }

    showIn()
    {
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