/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartProgressBarStruct from "../../Generates/CommonBase/ChartProgressBarStruct";

export default class ChartProgressBar extends ChartProgressBarStruct
{
    private barHeight: number = 0;
    updateView(height: number, isTween:boolean = false, delay: number = 0)
    {
        height = height * 150;
        this.barHeight = height;
        this.value = 0;
        if(!isTween) 
        {
            this.value = height;
        }
        else
        {
            Laya.timer.once(delay, this, this.onOnce,null,false);
        }
    }

    private onOnce()
    {
        this.tweenValue(this.barHeight, 2);
    }

    updateProgressBar(value: number, max: number)
    {
        this.m_title.visible = value > 0;
        this.max = max;
        this.value = value;
    }
}