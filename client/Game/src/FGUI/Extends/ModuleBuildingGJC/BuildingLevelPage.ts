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
import PropId from "../../../GameFrame/Props/PropId";
import { BuildingType } from "../../../GameModule/DataEnums/BuildingType";

export default class BuildingLevelPage extends BuildingLevelPageStruct
{
    //建筑数据
    private buildingData: BuildingData;

    //消耗材料列表
    private costDataList: Array<any> = [];

    //预览状态
    private _costEnough: boolean = true;

    //窗口初始化完毕
    onWindowInited(): void {       
        this.m_listCost.itemRenderer = Laya.Handler.create(this, this.renderListItemCost, null, false);
        this.m_listCost.on(fairygui.Events.CLICK_ITEM, this, this.getMaterials);

        this.m_btnBuild.onClick(this, this.buildFunc);
    }

    buildFunc(): void {
        // 材料不足
        if (this._costEnough = false) {
            this.getMaterials();
            return;
        }

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


    //获取材料
    getMaterials(item?: ItemCostItem): void {
        if (!item.m_enough.selectedIndex) {
            console.log("==========获取材料")   
        }
    }

    //消耗材料列表
    renderListItemCost(index: number, item: ItemCostItem): void {
        if (!item.RenderItem(this.costDataList[index])) {
            this._costEnough = false;
        }
    }

    buildingCostShow(): void {
        let building: BuildingData = this.buildingData;

        let config: BuildingLevelConfig = building.nowConfig;  
        let type = building.nowBuildType;
        if (type == BuildingBuildType.Break) {
            this.costDataList = config.breCost;
        } else {
            this.costDataList = config.cost;
            this.m_labTime.text = TimeHelper.TimeFormatFixedHHMMSS(config.prop_buildingCd);
        }

        this._costEnough = true;
        this.m_listCost.numItems = this.costDataList.length;
    }

    //等级效果
    buildingPropShow(): void {
        let building: BuildingData = this.buildingData;

        switch (building.nowBuildType) {
            case BuildingBuildType.Make:
                this.m_labIntroduce.text = building.config.tip1;
                break;
            case BuildingBuildType.Level:
                this.m_labNowLevel.text = format(TEXT.Lv, building.level);
                if (building.hasNextLevel) {
                    this.m_labNextLevel.text = format(TEXT.Lv, building.nextLevelConfig.level);
                }

                if (building.id == BuildingType.CommerceDepartment) {
                    // this.m_type.selectedIndex = 1;
                    let prop_storyProbabilityCl = building.propStoryProbabilityCl;
                    let prop_storyNum = building.propStoryNum;

                    // this.m_dataProbability.RenderItem(prop_storyProbabilityCl.val, prop_storyProbabilityCl.nextVal, 1);
                    // this.m_dataLimit.RenderItem(prop_storyNum.val, prop_storyNum.nextVal, 0);
                } else {
                    // this.m_type.selectedIndex = 0;
                    let prop_produceNum = building.propProduceNum;
                    let prop_produceCd = building.propProduceCd;
                    let prop_reserve = building.propReserve;

                    let nowSpeed = Math.floor((60 * 60) / prop_produceCd.val * prop_produceNum.val);
                    let nextSpeed = Math.floor((60 * 60) / prop_produceCd.nextVal * prop_produceNum.nextVal);
                    this.m_dataSpeed.RenderItem(nowSpeed, nextSpeed, 0);
                    this.m_dataReserves.RenderItem(prop_reserve.val, prop_reserve.nextVal, 0);
                }
                
                break;
            case BuildingBuildType.Break:
                this.m_labIntroduce.text = building.config.tip2;
                break;
            default:
                break;
        }
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
        this.buildingData = null;
        this.costDataList = [];
    }
}