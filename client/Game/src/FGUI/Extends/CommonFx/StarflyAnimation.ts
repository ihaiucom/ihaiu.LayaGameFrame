/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StarflyAnimationStruct from "../../Generates/CommonFx/StarflyAnimationStruct";

export default class StarflyAnimation extends StarflyAnimationStruct
{
    async play() {
        this.playBy(1);
    }

    async playBy(times?: number,delay?:number) {
        this.m_t1.play(Laya.Handler.create(this,this.OnCompletion),times,delay);
    }

    OnCompletion() {

    }
}