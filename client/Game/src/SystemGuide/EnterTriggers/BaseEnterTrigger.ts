import GuideStepAction from "../Actions/GuideStepAction";

/**
 * 抽象 Enter触发器
 */
export default abstract class BaseEnterTrigger
{

    step:GuideStepAction;
    switch: boolean = true; // 检测开关，当有一步引导触发，其他引导检测开关关闭

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
        this.switch = false;
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

    /** 成功 */
    onSuccess()
    {
        this.stop();
        this.step.onTriggerSuccess(this);
    }
}