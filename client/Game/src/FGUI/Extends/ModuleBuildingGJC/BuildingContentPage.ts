/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingContentPageStruct from "../../Generates/ModuleBuildingGJC/BuildingContentPageStruct";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import ProduceItem from "../CommonGame/ProduceItem";
import { BuildingContentType } from "./BuildingWindowUIGJC";
import BuildingLevelConfig from "../../../Config/ConfigExtends/BuildingLevelConfig";
import BuildingConfigItem from "./BuildingConfigItem";
import Game from "../../../Game";

export default class BuildingContentPage extends BuildingContentPageStruct
{
    //建筑数据
    private buildingData: BuildingData;

    //产出列表
    private produceList: Array<any> = [];

    //配置列表
    private configList: Array<BuildingLevelConfig> = [];

    //窗口初始化完毕
    onWindowInited(): void {
        this.m_listProduce.itemRenderer = Laya.Handler.create(this, this.renderListProduce, null, false);  
        this.m_listConfig.itemRenderer = Laya.Handler.create(this, this.renderListConfig, null, false);
        this.m_listConfig.on(fairygui.Events.PULL_UP_RELEASE, this, this.pullUpToRefresh);
        this.m_listConfig.setVirtual();

        this.m_tabContent.m_tab.on(fairygui.Events.STATE_CHANGED, this, this.changeTab);
    }
    //更换标签
    changeTab(): void {
        this.m_tab.selectedIndex = this.m_tabContent.m_tab.selectedIndex;
    }

    //产出List刷新回调
    renderListProduce(index: number, item: ProduceItem): void  {
        item.renderItem(index, this.buildingData);
    }

    //配置List刷新回调
    private scrollIndex:number = 0;
    renderListConfig(index: number, item: BuildingConfigItem): void  {
        let select = this.configList[index].level == this.buildingData.level
        if (select) {
            this.scrollIndex = index;
        }
        item.renderItem(this.configList[index], select);
    }

    pullUpToRefresh(event: Event): void {
        
    }

    buildingProduceShow(): void {
        let building: BuildingData = this.buildingData;

        //当前等级属性
        let levelconfig:BuildingLevelConfig = building.levelConfig;

        this.m_labTime.text = String(levelconfig.prop_produceCd);
        let timeAdd = building.propProduceCd - levelconfig.prop_produceCd;
        this.m_labTimeAdd.text = (timeAdd ? "+" + timeAdd : ""); 

        this.m_labNum.text = String(levelconfig.prop_produceNum);
        let numAdd  = building.propProduceNum - levelconfig.prop_produceNum;
        this.m_labNumAdd.text = (numAdd ? "-" + numAdd : ""); 

        this.m_labReserve.text = String(levelconfig.prop_reserve);
        let reserveAdd = building.propReserveMax - levelconfig.prop_reserve
        this.m_labReserveAdd.text = (reserveAdd ? "+" + reserveAdd : "");


        this.produceList = building.currentProduceList;
        this.m_listProduce.numItems = this.produceList.length;
    }

    buildingConfigShow(): void {
        let building: BuildingData = this.buildingData;

        this.configList = building.underBreLevelMaxConfigs;
        this.m_listConfig.numItems = this.configList.length;

        let itemNum = (this.configList.length < 8) ? this.configList.length : 8;
        this.m_listConfig.resizeToFit(itemNum); 
        this.m_listConfig.scrollToView(this.scrollIndex);
    }

    updateView(building: BuildingData): void {
        this.buildingData = building;
        this.m_labIntroduce.text = building.config.tip1;        
        this.m_tabContent.m_tab.selectedIndex = BuildingContentType.Produce; 
        
        this.buildingProduceShow();
        this.buildingConfigShow();
    }

    hideView(): void {
        for (let i = 0; i < this.m_listProduce.numChildren; i++) {
            let item = this.m_listProduce.getChildAt(i);
            if (item) {
                Laya.timer.clearAll(item);
            }
        }
        this.m_listProduce.removeChildren(0, this.m_listProduce.numChildren, true);
        this.m_listConfig.numItems = 0;
        this.buildingData = null;
        this.produceList = [];
        this.configList  = [];
    }
}