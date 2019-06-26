import GuideManager from "../GuideManager";
import GuideStepAction from "./GuideStepAction";
import BaseBreakoffTrigger from "../BreakoffTriggers/BaseBreakoffTrigger";

/**
 * 抽象引导行为
 */
export default abstract class BaseAction
{
    /** 引导管理器 */
    guideManager: GuideManager;



    setGuideManager(guideManager: GuideManager)
    {
        this.guideManager = guideManager;
    }

    

    /** 中断器列表 */
    breakofferList: BaseBreakoffTrigger[] = [];

    /**
     * 启动 检测中断、丢失
     */
    checkBreakoffStart()
    {
        for(let item of this.breakofferList)
        {
            item.start();
        }
    }

    
    /**
     * 停止 检测中断、丢失
     */
    checkBreakoffStop()
    {
        for(let item of this.breakofferList)
        {
            item.stop();
        }
    }

    /**
     * 中断、丢失
     */
    onBreakoff(breakoffer?: BaseBreakoffTrigger | GuideStepAction)
    {
    }


    /**
     * 进入该行为
     */
    enter()
    {
        // 启动 检测中断、丢失
        this.checkBreakoffStart();
        this.onEnter();
    }

    
    /**
     * 行为进入， 被调用
     */
    onEnter()
    {

    }

    /**
     * 结束该行为
     */
    end()
    {
        this.onEnd();
    }


    /**
     * 行为结束 被调用
     */
    onEnd()
    {
        
    }
}