import BaseAction from "../Actions/BaseAction";

/**
 * 抽象 中断器
 */
export default abstract class BaseBreakoffTrigger
{

    step:BaseAction;

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
        return true;
    }

    /** 成功 */
    onSuccess()
    {
        this.stop();
        this.step.onBreakoff(this);
    }
}