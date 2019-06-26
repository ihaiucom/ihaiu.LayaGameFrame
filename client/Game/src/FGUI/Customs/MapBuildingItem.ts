import MapBuilding from "./MapBuilding";
import HomeMapUI from "../Extends/SystemModuleHomeMap/HomeMapUI";
import Pool = Laya.Pool;
import BuildingData from "../../GameModule/DataStructs/BuildingData";
import Game from "../../Game";
import ItemConfig from "../../Config/ConfigExtends/ItemConfig";
import GameEventKey from "../../GameEventKey";
import MsgKey from "../../Config/Keys/MsgKey";
import TEXT from "../../Config/Keys/TEXT";
import BuildingGetItem from "../Extends/SystemModuleHomeMap/BuildingGetItem";

/**
 * 地图--建筑--生产物品
 */
export default class MapBuildingItem
{
    // 地图
    homeMapUI:HomeMapUI;

    // 地图 -- 建筑
    mapBuilding:MapBuilding;

    // 建筑数据
    buildingData: BuildingData;

    install(mapBuilding:MapBuilding, homeMapUI:HomeMapUI)
    {
        this.mapBuilding = mapBuilding;
        this.homeMapUI = homeMapUI;
    }

    uninstall()
    {
        this._itemId = -999;
        this._isLoop = false;
        Laya.timer.clearAll(this);
    }

    update(buildingData: BuildingData)
    {
        this.buildingData = buildingData;

        this.mapBuilding.buildAndLevelAndItemBubble.state = 1;
        this.startProduce();
    }

    private _itemId: number = -999;  
    private _isLoop: boolean= false;  
    startProduce()
    {
        let produce = this.buildingData.getProduceByIndex(0);
        if (produce) {
            if (produce.itemId > 0 && produce.itemId != this._itemId) {
                this._itemId = produce.itemId;
                let config = Game.config.item.getConfig(produce.itemId);
                this.mapBuilding.buildAndLevelAndItemBubble.m_imgItem.url = config.iconUrl;
            }

            let nownum = this.buildingData.currentProduceNum(produce.itemId);
            if (nownum > 0) {
                this.mapBuilding.buildAndLevelAndItemBubble.visible = true;
            } else {
                this.mapBuilding.buildAndLevelAndItemBubble.visible = false;
                if (this._isLoop == false) {
                    this._isLoop = true;
                    let _cdTime = this.buildingData.propProduceCd * 1000;
                    let _deTime = (Game.time.serverSeconds - produce.startTime) * 1000;
                    Laya.timer.once((_cdTime - _deTime), this, ()=>{
                        this._isLoop = false;
                        this.mapBuilding.buildAndLevelAndItemBubble.visible = true;
                    })
                }
                
            }
        } else {
            Laya.timer.clearAll(this);
            this.mapBuilding.buildAndLevelAndItemBubble.visible = false;
        }
    }

    stopProduce()
    {
        Laya.timer.clearAll(this);
        this.mapBuilding.buildAndLevelAndItemBubble.visible = false;
    }


    getProduct(produces: any)
    {
        if (!produces) {
            return;
        }
        
        for (let i = 0; i < produces.length; i++) {
            let item = BuildingGetItem.poolGet();
            item.init(produces[i], this.mapBuilding, this.homeMapUI);
            item.play(1000, 300 * i)
        }
    }

    /** 丢回对象池 */
    public poolRecover()
    {
        Pool.recover(MapBuildingItem.POOL_SIGN, this)
    }

    private static POOL_SIGN = "MapBuildingItem";
    /** 从对象池里获取对象 */
    public static poolGet():MapBuildingItem
    {
        let item = <MapBuildingItem> Pool.getItemByClass(MapBuildingItem.POOL_SIGN, MapBuildingItem)
        return item;
    }
}