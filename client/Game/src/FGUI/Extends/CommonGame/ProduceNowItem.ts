/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ProduceNowItemStruct from "../../Generates/CommonGame/ProduceNowItemStruct";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import Game from "../../../Game";

export default class ProduceNowItem extends ProduceNowItemStruct
{
    dataSource: BuildingData;

    // 图标
    private _itemId: number;
    public set iconItem(itemId: number) {
        if (this._itemId != itemId) {
            this._itemId = itemId;
            this.m_imgItem.url   = Game.config.item.getConfig(itemId).iconUrl;            
        }
    }

    // 进度条
    private _ratio: number;
    public set fillCD(ratio: number) {
        if (this._ratio != ratio) {
            this._ratio = ratio;
            this.m_progressSpeed.value = ratio * 100;   
        }
    }

    // 产出数量
    private _text: string;
    public set textItem(text: string) {
        if (this._text != text) {
            this._text = text;
            this.m_labNum.text = text;                        
        }
    }

    private _index: number;
    // 刷新Item
    renderItem(index: number, building: BuildingData)
    {
        this.dataSource = building;
        this._index = index;
        
        let produce = building.getProduceByIndex(index);
        this.iconItem  = produce.itemId;  
        
        let nownum = building.currentProduceNum(produce.itemId);
        let maxnum = building.propReserve.val;

        Laya.timer.clearAll(this);
        if (nownum == maxnum) {
            this.fillCD = 1;
        } else {
            this._cdTime   = building.propProduceCd.val * 1000;
            this._totalTime= building.getProduceCDByIndex(this._index) * 1000;
            this.fillCD = this._totalTime / this._cdTime;
                
            Laya.timer.loop(this._intervalTime, this, this.onSecond);
        }
        this.textItem= String(nownum);
    }

    private _intervalTime: number = 100;  //毫秒--间隔
    private _totalTime: number = 0;
    private _cdTime:number = 0;
    // 循环主体
    onSecond()
    {
        this._totalTime += this._intervalTime;

        this.fillCD = this._totalTime / this._cdTime;
        if (this._ratio >= 1) {
            this._totalTime = 0;
            this._cdTime = this.dataSource.propProduceCd.val * 1000

            let nownum = this.dataSource.currentProduceNum(this._itemId);
            let maxnum = this.dataSource.propReserve.val;
            this.textItem= String(nownum);
            if (nownum == maxnum) {
                Laya.timer.clearAll(this);
            }
        } 
        
    }
}