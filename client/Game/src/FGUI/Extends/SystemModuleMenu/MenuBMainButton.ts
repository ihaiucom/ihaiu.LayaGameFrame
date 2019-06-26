/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBMainButtonStruct from "../../Generates/SystemModuleMenu/MenuBMainButtonStruct";
import Random from "../../../Libs/Helpers/Random";
import Mathf from "../../../Libs/Mathf";

export default class MenuBMainButton extends MenuBMainButtonStruct
{
    butterFxInitX: number = 0;
    butterFxInitY: number = 0;

	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.butterFxInitX = this.m_butterflyFx.x;
        this.butterFxInitY = this.m_butterflyFx.y;
        window['menuMainButton'] = this;
    }
    

    // 窗口显示
    onWindowShow(): void
    {
        this.startMoveButterflyFx();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.stopMoveButterflyFx();
        Laya.Tween.clearAll(this.m_butterflyFx);
        Laya.timer.clearAll(this);
        this.m_t0.stop();
    }

    tm = 10;
    startMoveButterflyFx()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this.m_butterflyFx);
        this.m_t0.stop();
        this.m_butterflyFx.playing = true;
        this.m_butterflyFx.timeScale = 1;
        
        let x = this.butterFxInitX - 70;
        let y = this.butterFxInitY - 70;
        let t = Mathf.distanceangle(x, y, this.butterFxInitX, this.butterFxInitY) * this.tm;
        this.m_butterflyFx.x = x;
        this.m_butterflyFx.y = y;
        // Laya.Tween.to(this.m_butterflyFx, {x: x, y: y}, Random.range(1000, 5000), null, Laya.Handler.create(this, this.startMoveButterflyFx, null, true));
        
        Laya.Tween.to(this.m_butterflyFx, {x: this.butterFxInitX, y: this.butterFxInitY}, t, null, Laya.Handler.create(this, this.flyStop, null, true));
        
    }

    flyStop()
    {
        if(!this.m_t0.playing)
        {
            this.m_t0._timeScale = 0.5;
            this.m_t0.play(null, -1, 0);
        }
        this.m_butterflyFx.timeScale = 0.5;
        // Laya.timer.once(Random.range(1000, 5000), this, this.flyStart);
    }


    flyStart()
    {
        this.m_butterflyFx.timeScale = 1;
        let x = this.butterFxInitX - Random.range(20, 50);
        let y = this.butterFxInitY - Random.range(10, 50);
        let t =  Random.range(1000, 5000);
        Laya.Tween.to(this.m_butterflyFx, {x: x, y: y}, t, null, null);
        Laya.Tween.to(this.m_butterflyFx, {x: this.butterFxInitX, y: this.butterFxInitY}, Random.range(1000, 5000), null, Laya.Handler.create(this, this.flyStop, null, true), t);
        
        // Laya.timer.once(Random.range(1000, 5000), this, this.flyStop);
    }


    stopMoveButterflyFx()
    {
        this.m_butterflyFx.playing = false;
        Laya.Tween.clearAll(this.m_butterflyFx);
    }

}