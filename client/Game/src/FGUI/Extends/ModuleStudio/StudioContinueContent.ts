/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioContinueContentStruct from "../../Generates/ModuleStudio/StudioContinueContentStruct";
import StudioContinuedData from "../../../GameModule/DataStructs/StudioContinuedData";
import StudioCPChartPanel from "./StudioCPChartPanel";

export default class StudioContinueContent extends StudioContinueContentStruct
{
    dataList: StudioContinuedData[] = [];
    items: StudioCPChartPanel[] = [];

    updateView(dataList: StudioContinuedData[])
    {
        this.clear();
        this.dataList = dataList;
        for (let index = 0; index < dataList.length; index++) {
            let item = StudioCPChartPanel.poolGet();
            this.addItem(item,index);
            item.updateView(dataList[index],index);
        }
    }

    addItem(item: StudioCPChartPanel, index: number) {
        item.width = this.width;
        item.y = index * (item.height);
        this.items.splice(index,0, item);
        this.addChildAt(item,index);
        this.height += item.height;
    }

    removeItem(index: number)
    {
        this.removeItemAt(index);
        this.tweenItemsAfter(index);
    }

    private tweenItemsAfter(index: number)
    {
        let tweenDuration = 200;
        for (let i = index; i < this.numChildren; i++) {
            let item = <StudioCPChartPanel>this.getChildAt(i);
            let itemY = i * item.height;
            item.itemIndex = i;
            Laya.Tween.to(item, {y: itemY}, tweenDuration);
        }
    }
    private removeItemAt(index: number)
    {
        let item = this.getChildAt(index);
        let reduceHeight = item.height;
        this.removeChild(item);
        this.height -= reduceHeight;
    }

    clear()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        this.dataList.length = 0;
        while(this.numChildren > 0)
        {
            let item = this.getChildAt(0);
            if(item instanceof StudioCPChartPanel)
                item.poolRecover();
        }
        this.height = 0;
    }
}