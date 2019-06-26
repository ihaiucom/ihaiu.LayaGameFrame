import GuideGroupAction from "../Actions/GuideGroupAction";

/** 完成触发器 */
export default class CompleteTrigger
{
    group: GuideGroupAction;

    /**
     * 启动
     */
    start()
    {
        if(this.check())
        {
            this.onSuccess();
        }
        else
        {
            Laya.timer.once(1000, this, this.onTick);
        }
    }

    /** 停止 */
    stop()
    {
        Laya.timer.clear(this, this.onTick);
    }

    /** 间隔一段时间检测 */
    onTick()
    {
        if(this.check())
        {
            this.onSuccess();
        }
    }

    /**
     * 检测
     */
    check(): boolean
    {
        return false;
    }

    

    onSuccess()
    {
        this.group.end();
    }
}