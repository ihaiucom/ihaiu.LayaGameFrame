import HomeMapUI from "../Extends/SystemModuleHomeMap/HomeMapUI";
import Dictionary from "../../Libs/Helpers/Dictionary";
import MapRegion from "./MapRegion";
import BuildingRegionData from "../../GameModule/DataStructs/BuildingRegionData";
import BuildingLevelConfig from "../../Config/ConfigExtends/BuildingLevelConfig";
import Game from "../../Game";

export default class MapRegionManager {
    // 地图
    homeMapUI:HomeMapUI;

    // 区域集合
    regionDict: Dictionary<number, MapRegion> = new Dictionary<number, MapRegion>();
    // 区域列表
    regionList: Array<MapRegion> = [];

    install(homeMapUI:HomeMapUI)
    {
        this.homeMapUI = homeMapUI;

        //设置所有区域
        let regionList = this.regionList;
        for (let i = 0; i < regionList.length; i++) {
            this.homeMapUI.mapPath.setDDecorationRegionEnable(regionList[i].regionData.id, false);
        }
    }

    uninstall()
    {  
        
    }

    addRegion(key: number, region: MapRegion)
    {
        this.regionDict.add(key, region);
        this.regionList.push(region);
    }

    update(regionDatas: Array<BuildingRegionData>)
    {
        for (let i = 0; i < regionDatas.length; i++) {
            let region = this.regionDict.getValue(regionDatas[i].id);
            region.update(regionDatas[i]);
            this.homeMapUI.mapPath.setDDecorationRegionEnable(region.regionData.id, true);
        }
    }

    getRegionList(levelConfig:BuildingLevelConfig): Array<MapRegion>
    {
        let regionList = [];
        if (levelConfig) {
            for (let i = 0; i < levelConfig.levelRegionId.length; i++) {
                let regionId = levelConfig.levelRegionId[i];
                let region = this.regionDict.getValue(regionId);
                regionList.push(region);
            }
        } 

        return regionList;
    }

    getBuildingList(levelConfig:BuildingLevelConfig): Array<MapRegion>
    {
        let buildingList = [];
        if (levelConfig) {
            for (let i = 0; i < levelConfig.breakRegionId.length; i++) {
                if (!levelConfig.breakRegionId[i]) {
                    break;
                }
                let regionId = levelConfig.breakRegionId[i];
                let region = this.regionDict.getValue(regionId);
                buildingList.push(region);
            }
        } 

        return buildingList;
    }

    regionReadyShow(nextLevelConfig:BuildingLevelConfig)
    {
        if (nextLevelConfig) {
            for (let i = 0; i < nextLevelConfig.levelRegionId.length; i++) {
                let regionId = nextLevelConfig.levelRegionId[i];
                let regionData = BuildingRegionData.Create(Game.config.buildingRegion.getConfig(regionId))
                regionData.level = nextLevelConfig.regionLevel;

                let region = this.regionDict.getValue(regionId);
                region.showReady(regionData);
            }
        }
    }

    regionReadyHide(nextLevelConfig:BuildingLevelConfig)
    {
        if (nextLevelConfig) {
            for (let i = 0; i < nextLevelConfig.levelRegionId.length; i++) {
                let regionId = nextLevelConfig.levelRegionId[i];
                let region = this.regionDict.getValue(regionId);
                region.hideReady();
            }
        }
    }

    regionShow(nextLevelConfig:BuildingLevelConfig, time: number)
    {
        if (nextLevelConfig) {
            for (let i = 0; i < nextLevelConfig.levelRegionId.length; i++) {
                let regionId = nextLevelConfig.levelRegionId[i];
                let regionData = BuildingRegionData.Create(Game.config.buildingRegion.getConfig(regionId))
                regionData.level = nextLevelConfig.regionLevel;

                let region = this.regionDict.getValue(regionId);
                region.show(time);
            }
        }
    }
}