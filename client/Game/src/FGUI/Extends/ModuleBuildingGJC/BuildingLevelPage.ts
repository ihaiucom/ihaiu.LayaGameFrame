/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingLevelPageStruct from "../../Generates/ModuleBuildingGJC/BuildingLevelPageStruct";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import { BuildingBuildType, BuildingConditionType } from "./BuildingWindowUIGJC";
import TEXT from "../../../Config/Keys/TEXT";
import PropField from "../../../GameFrame/Props/PropField";
import BuildingDataItem from "./BuildingDataItem";
import ItemCostItem from "../CommonGame/ItemCostItem";
import BuildingLevelConfig from "../../../Config/ConfigExtends/BuildingLevelConfig";
import TimeHelper from "../../../GameHelpers/TimeHelper";
import Game from "../../../Game";
import MsgKey from "../../../Config/Keys/MsgKey";
import GameEventKey from "../../../GameEventKey";

export default class BuildingLevelPage extends BuildingLevelPageStruct
{
    //建筑数据
    private buildingData: BuildingData;

    //效果列表
    private propDataList: Array<any> = [];

    //消耗材料列表
    private costDataList: Array<any> = [];

    //预览状态
    private _preView: boolean = false;

    //窗口初始化完毕
    onWindowInited(): void {
        this.m_listData.itemRenderer = Laya.Handler.create(this, this.renderListItemData, null, false);        
        this.m_listCost.itemRenderer = Laya.Handler.create(this, this.renderListItemCost, null, false);

        this.m_btnCondition.onClick(this, this.conditionFunc);
        this.m_btnBuild.onClick(this, this.buildFunc);
        this.m_btnPreView.onClick(this, this.preViewFunc);
    }

    //获取材料
    conditionFunc(): void {
        console.log("==========获取材料")
    }

    //预览
    preViewFunc(): void {
        this._preView = !this._preView;
        Game.event.dispatch(GameEventKey.Build_PreView, this.buildingData.id, this._preView);
    }

    buildFunc(): void {
        let building: BuildingData = this.buildingData;

        if (this.m_build.selectedIndex != BuildingBuildType.Break) {
            if (building.userLevelRequest) {
                Game.system.toastMsg(MsgKey.build_non_level, building.userLevelRequest);
                return;
            }
            if (!this.buildingData.builded) {
                
            }
            Game.sender.building.buildingLevelUp(this.buildingData.id);   
            Game.event.dispatch(GameEventKey.Build_LevelUp, this.buildingData);         
        } else {
            Game.sender.building.buildingBreakUp(this.buildingData.id); 
        }

        Game.event.dispatch(GameEventKey.Build_CloseWindowUI)
    }


    //等级数据列表
    renderListItemData(index: number, item: BuildingDataItem): void {
        item.RenderItem(this.propDataList[index], this.buildingData.nowBuildType);
    }

    //消耗材料列表
    renderListItemCost(index: number, item: ItemCostItem): void {
        if (!item.RenderItem(this.costDataList[index])) {
            this.m_condition.selectedIndex = BuildingConditionType.NO;
        }
    }

    buildingCostShow(): void {
        let building: BuildingData = this.buildingData;

        this.m_condition.selectedIndex = BuildingConditionType.OK;
        let config: BuildingLevelConfig = building.nowConfig;  
        let type = building.nowBuildType;
        if (type == BuildingBuildType.Break) {
            this.costDataList = config.breCost;
        } else {
            this.costDataList = config.cost;
            this.m_labTime.text = TimeHelper.TimeFormatFixedHHMMSS(config.prop_buildingCd);
        }

        this.m_listCost.numItems = this.costDataList.length;
        this.m_labCost.text = TEXT.BuildTitleType[type] + TEXT.BuildTitleCost;
    }

    //等级效果
    buildingPropShow(): void {
        let building: BuildingData = this.buildingData;

        this.propDataList = [];
        switch (building.nowBuildType) {
            case BuildingBuildType.Make:
                this.m_labIntroduce.text = building.config.tip1;
                this.m_labLevel.text = TEXT.BuildEffect;
                break;
            case BuildingBuildType.Level:
                this.propDataList = this.matchProps();
                this.m_labLevel.text = format(TEXT.BuildNextLevel, building.level + 1);
                break;
            case BuildingBuildType.Break:
                this.propDataList.push(TEXT.BuildPicChange);
                this.propDataList.push(TEXT.BuildLevelMax);
                this.propDataList.push(TEXT.BuildOpenCell);
                this.m_labLevel.text = TEXT.BuildBreak;
                break;
            default:
                break;
        }

        this.m_listData.numItems = this.propDataList.length;
    }

    //筛选效果
    matchProps(): Array<any> {
        let building: BuildingData = this.buildingData;
        let list: Array<any> = [];
        for (let item of building.prop.list) {
            if (item.field == PropField.reserve || item.field == PropField.produceNum || item.field == PropField.produceCd) {
                list.push(item);
            }
        }

        return list;
    }
    


    updateView(building: BuildingData): void {
        this.buildingData = building;
        this.m_build.selectedIndex = building.nowBuildType;

        this.buildingPropShow();
        this.buildingCostShow();
    }

    hideView(): void {
        if (this._preView) {
            this._preView = false;
            this.m_btnPreView.selected = false;            
            Game.event.dispatch(GameEventKey.Build_PreView, this.buildingData.id, false);
        }
        this.buildingData = null;
        this.propDataList = [];
        this.costDataList = [];
    }
}