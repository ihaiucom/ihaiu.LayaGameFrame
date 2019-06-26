/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioEventCommentItemStruct from "../../Generates/ModuleStudio/StudioEventCommentItemStruct";
import { UIVirtualListItem } from '../../../Libs/Helpers/UIVirtualList';
import TypedSignal from "../../../Libs/signals/TypedSignal";
import StudioEventEvaluationConfig from '../../../Config/ConfigExtends/StudioEventEvaluationConfig';
import TimeHelper from '../../../GameHelpers/TimeHelper';
import Random from '../../../Libs/Helpers/Random';
import Game from '../../../Game';
import NumberRoller from '../../../Libs/Helpers/NumberRoller';

export default class StudioEventCommentItem extends StudioEventCommentItemStruct{
    fromY: number = 0;
    toY: number = 0;
    tweenTo(fromY: number, toY: number, duration: number = 200, delay: number = 0)  {
        let that = this;
        Laya.Tween.clearTween(this);
        this.fromY = fromY;
        this.toY = toY;
        this.y = fromY;

        Laya.Tween.to(this, { y: toY }, duration, Laya.Ease.expoOut, null, delay);
    }

    fromAlpha: number = 0;
    toAlpha: number = 1;
    tweenAlpha(duration: number, fromAlpha: number = 0, toAlpha: number = 1, delay: number = 0)
    {
        let that = this;
        Laya.Tween.clearTween(this);
        this.fromAlpha = fromAlpha;
        this.toAlpha = toAlpha;
        // this.alpha = fromAlpha;
        this.alpha = 1;
        NumberRoller.rolling(this.m_num,duration);
        // Laya.Tween.to(this, { alpha: toAlpha }, duration, Laya.Ease.quadIn, null, delay);
    }
    
    async updateView(data: StudioEventEvaluationConfig) {
        this.m_name.text = data.name;
        this.m_content.text = data.content;
        this.m_headIcon.icon = data.headIcon;
        this.m_timeLb.text = TimeHelper.GetYMDHMS(Game.time.serverSeconds);
        this.m_num.text = Random.range(5000, 15000).toString();
    }

    clear() {
        Laya.timer.clearAll(this);
        Laya.Tween.clearTween(this);
    }
    /** 丢回对象池 */
    public poolRecover()  {
        this.clear();
        this.removeFromParent();
        Laya.Pool.recover(StudioEventCommentItem.URL, this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): StudioEventCommentItem  {
        let item = <StudioEventCommentItem>Laya.Pool.getItem(StudioEventCommentItem.URL);
        if (!item) {
            item = StudioEventCommentItem.createInstance();
        }
        return item;
    }
}