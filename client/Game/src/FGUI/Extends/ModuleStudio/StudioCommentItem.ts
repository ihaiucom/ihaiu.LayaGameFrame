/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCommentItemStruct from "../../Generates/ModuleStudio/StudioCommentItemStruct";
import StudioAudienceEvaluationConfig from "../../../Config/ConfigExtends/StudioAudienceEvaluationConfig";
import TimeHelper from "../../../GameHelpers/TimeHelper";
import Random from "../../../Libs/Helpers/Random";
import NumberRoller from "../../../Libs/Helpers/NumberRoller";

export default class StudioCommentItem extends StudioCommentItemStruct
{
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
        // this.alpha = 1;
        this.alpha = fromAlpha;
        NumberRoller.rolling(this.m_num,duration);
        Laya.Tween.to(this, { alpha: toAlpha }, duration, Laya.Ease.quadIn, null, delay);
    }
    
    async updateView(data: StudioAudienceEvaluationConfig) {
        this.m_name.text = data.name;
        this.m_content.text = data.content;
        this.m_headIcon.icon = data.headIconUrl;
        this.m_timeLb.text = TimeHelper.GetYMDHMS();
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
        Laya.Pool.recover(StudioCommentItem.URL, this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): StudioCommentItem  {
        let item = <StudioCommentItem>Laya.Pool.getItem(StudioCommentItem.URL);
        if (!item) {
            item = StudioCommentItem.createInstance();
        }
        return item;
    }
}