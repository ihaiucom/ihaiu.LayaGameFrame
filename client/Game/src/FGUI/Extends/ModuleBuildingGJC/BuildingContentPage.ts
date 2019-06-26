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
import TimeHelper from "../../../GameHelpers/TimeHelper";
import TEXT from "../../../Config/Keys/TEXT";
import ProduceNowItem from "../CommonGame/ProduceNowItem";

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
        this.m_btnInfo.onClick(this, this.infoShow)
        this.m_listProduce.itemRenderer = Laya.Handler.create(this, this.renderListProduce, null, false);  
    }

    // 展示具体信息
    infoShow()
    {
        Game.system.buildingInfoShow(this.buildingData);
    }

    //产出List刷新回调
    renderListProduce(index: number, item: ProduceNowItem): void  {
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

    onSecond()
    {   
        this.m_labTime.text = format(TEXT.BuildNeedTimeTail, TimeHelper.TimeFormatFixedHHMMSS(this._time));
        this.m_progressReserves.value = this.buildingData.currentProduceNumAll;
        if (this._time == 0) {
            Laya.timer.clear(this, this.onSecond);
        }


        this._time--;
    }

    private _produceNum: number;
    private _produceCD: number;
    private _time: number;

    updateReservesShow(): void {
        let building: BuildingData = this.buildingData;

        let produce = building.currentProduceSlow();

        if (!produce) {
            this.m_valGroup.visible = false;
            return;
        }

        this.m_valGroup.visible = true;

        let nowtime = building.getProduceCDById(produce.itemId);
        let nowNum  = building.currentProduceNum(produce.itemId);

        let reserves = building.propReserve.val;
        this.m_progressReserves.max = reserves * building.currentProduceListNum;

        this._produceNum = building.propProduceNum.val;
        this._produceCD= building.propProduceCd.val;
        this._time = Math.floor((reserves - nowNum) / this._produceNum * this._produceCD) - nowtime;

        Laya.timer.clear(this, this.onSecond);
        Laya.timer.loop(1000, this, this.onSecond, null, true);
        this.onSecond();
    }

    buildingProduceShow(): void {
        let building: BuildingData = this.buildingData;

        this.produceList = building.currentProduceList;
        this.m_listProduce.numItems = this.produceList.length;
    }

    updateView(building: BuildingData): void {
        this.buildingData = building;
        this.m_labIntroduce.text = building.config.tip1;        
        
        this.updateReservesShow();
        this.buildingProduceShow();
    }

    hideView(): void {
        for (let i = 0; i < this.m_listProduce.numChildren; i++) {
            let item = this.m_listProduce.getChildAt(i);
            if (item) {
                Laya.timer.clearAll(item);
            }
        }
        this.m_listProduce.removeChildren(0, this.m_listProduce.numChildren, true);
        Laya.timer.clear(this, this.onSecond);
        this.buildingData = null;
        this.produceList = [];
        this.configList  = [];
    }
}