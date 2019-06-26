/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BaseProgressBarStruct from "../../Generates/CommonBase/BaseProgressBarStruct";
import TEXT from '../../../Config/Keys/TEXT';

export default class BaseProgressBar extends BaseProgressBarStruct
{
    previousValue: number = 0;
    targetValue: number = 0;
    stepLength: number = 1;

    updateView(value: number, max: number)
    {
        
    }

    onWindowHide() 
    {
        Laya.timer.clearAll(this);
    }

    /**
     * 
     * @param level 等级
     * @param previousValue 经验条变化前的值
     * @param targetValue 经验条变化后的值
     * @param max 经验条长度
     * @param duration 变化持续时间
     * @param delay 变化延迟时间
     */
    tweenUpdateView(level: number,previousValue: number, targetValue: number, max: number,duration: number, delay: number)
    {
        // this.value = previousValue;
        // this.previousValue = previousValue;
        // this.targetValue = targetValue;
        Laya.timer.once(delay,this, this.onLoop,[level,previousValue,duration,targetValue, max],false);
    }

    onLoop(level: number,previousValue: number,duration: number,targetValue: number, max: number) 
    {
        this.m_level2.text = level + "";
        this.value = previousValue;
        this.max = max;        
        this.tweenValue(targetValue, duration);
        
        // Laya.Tween.to(this, {value: targetValue},duration);
        
        // if(this.previousValue >= this.targetValue) {
        //     Laya.timer.clearAll(this);
        //     return;
        // }
        // this.previousValue += this.stepLength;
        // this.value = this.previousValue;
    }

    // update(newValue: number): void
    // {
    //     console.log(newValue);
    //     // this.value = newValue;
    // }

    

    update(newValue: number): void
    {
        super.update(newValue);
        
        var percent=this.max!=0?Math.min(newValue / this.max,1):0;
        this.m_bar1.visible = percent > 0.3;
    }
    
}