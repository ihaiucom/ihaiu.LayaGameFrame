/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioChartListStruct from "../../Generates/ModuleStudio/StudioChartListStruct";
import StudioContinuedData from '../../../GameModule/DataStructs/StudioContinuedData';
import Game from '../../../Game';
import ChartProgressBar from "../CommonBase/ChartProgressBar";

export default class StudioChartList extends StudioChartListStruct
{
    continueData: StudioContinuedData;
    
    setData(continueData: StudioContinuedData)
    {
        this.continueData = continueData;
        this.clear();
        this.updateChartData();
        Laya.timer.loop(1000, this, this.updateChartData, null, false);
    }

    updateChartData()
    {
        let data = this.continueData;
        if(data)
        {
            let list = data.newProfitList;
            let max = data.maxProfit;
            if(data.currentChartIndex >= data.profitList.length)
            {
                    list = data.profitList;
                    max = data.getMaxProfitWidthIndex(data.profitList.length-1);
            }
            if(!max)
                return;
            for (let index = 0; index < 7; index++) {
                let item = <ChartProgressBar>this['m_item'+ index];
                item.updateProgressBar(list[index], max);
            }
        }
    }

    clear()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    }

    // 窗口即将关闭，可以在这里做缓动
    onWindowWillHide(): void
    {
        this.clear();
    }

}