import MModel from "../../GameFrame/Module/MModel";
import StudioContinuedData from "../DataStructs/StudioContinuedData";
import Dictionary from "../../Libs/Helpers/Dictionary";
import IStudioContinuedData = proto.IStudioContinuedData;
import StudioContinuedReceiveS2C = proto.StudioContinuedReceiveS2C;
import StudioContinuedReceiveAllS2C = proto.StudioContinuedReceiveAllS2C;
import TypedSignal from "../../Libs/signals/TypedSignal";
import TEXT from "../../Config/Keys/TEXT";
import Game from "../../Game";

/**
 * 拍摄持续收益 数据模型
 */
export default class StudioContinuedModel extends MModel 
{
    /** item index */
    sRemveItem: TypedSignal<number> = new TypedSignal<number>();
    
    /** 拍摄持续收益 数据列表 */
    list:StudioContinuedData[] = [];
    private dict:Dictionary<int, StudioContinuedData> = new Dictionary<int, StudioContinuedData>();

    latestData: StudioContinuedData = new StudioContinuedData();
    
    /** 获取数据 */
    getData(uid:int)
    {
        return this.dict.getValue(uid);
    }

    get hasProfit():boolean
    {
        let profit = 0;
        this.list.forEach(data=>{
            profit += data.profit;
        })
        return profit > 0;
    }

    /** 设置协议数据列表 */
    setProtoListData(list:IStudioContinuedData[])
    {
        this.list.length = 0;
        this.dict.clear();

        for(let data of list)
        {
            let item = new StudioContinuedData();
            item.setProtoData(data);
            this.list.push(item);
            this.dict.add(item.uid, item);
        }
        this.list.sort((a,b)=>{
            return a.profitTimestamp > b.profitTimestamp?1:-1;
        });
    }

    updateProtoListData(s2c: StudioContinuedReceiveAllS2C)
    {
        if(s2c && s2c.error == 0)
        {
            for(let data of s2c.dataList)
            {
                let item  = this.getData(data.uid);
                item.updateProtoData(data);
            }
        if(s2c.goldNum)
        {
            let txt = TEXT.StudioContinueReward.format(s2c.goldNum);
            Game.system.toastText(txt);
        }
        }
    }

    updateProtoData(s2c: StudioContinuedReceiveS2C)
    {
        let item  = this.getData(s2c.data.uid);
        if(!item)
        {
            throw `ContinueData not found: uid=${s2c.data.uid}`;
        }
        item.updateProtoData(s2c.data);
        if(s2c.goldNum)
        {
            let txt = TEXT.StudioContinueReward.format(s2c.goldNum);
            Game.system.toastText(txt);
        }
    }


}