import GuideStepAction from "./GuideStepAction";
import BaseAction from "./BaseAction";
import CompleteTrigger from "../CompoenentTriggers/CompleteTrigger";
import GuideManager from "../GuideManager";
import Game from "../../Game";

/**
 * 引导组
 */
export default class GuideGroupAction extends BaseAction
{
    /** 完成触发器 */
    completeTrigger: CompleteTrigger;

    /** 组id */
    private _groupID: number;

    /** 步骤列表 */
    stepList: GuideStepAction[] = [];

    /** 当前引导步骤 */
    private _stepIndex: number = -1;


    setGroupID( id: number )
    {
        this._groupID = id;
    }

    get stepIndex(): number
    {
        return this._stepIndex;
    }

    get stepAction():GuideStepAction
    {
        return this.stepList[this._stepIndex];
    }


    setGuideManager(guideManager: GuideManager)
    {
        this.guideManager = guideManager;
        if ( this.stepList && this.stepList.length > 0 )
        {
            for(let step of this.stepList)
            {
                step.setGuideManager(guideManager);
            }
        }
    }

    // 引导组内是否有数据
    checkHaveGuide(): boolean {
        if ( !this.stepList || this.stepList.length <= 0 ){
            return false
        }
        return true
    }

    /**
     * 当子节点结束，被调用
     * @param stepAction 步骤行为
     */
    onStepEnd(stepAction: GuideStepAction)
    {
        this._stepIndex = stepAction.index + 1;

        // 该引导结束
        if(this._stepIndex >= this.stepList.length)
        {
            this.end(); // 全部结束
        }
        else
        {
            this.stepAction.enterTrigger.switch = true; // 开启可检测标记
            this.stepAction.enterTriggerStart(); // 下一步引导
        }
    }

    /**
     * 当被终止, 需要重置所有步骤，检测启动到哪个步骤
     */
    onBreakoff(...args)
    {
        // 启动检测步骤触发
        this.stepEnterTriggerStart();
    }

    /**
     * 启动该引导
     */
    start()
    {
        this._stepIndex = -1;

        // 启动检测引导完成
        this.checkCompleteStart();

        // 启动检测步骤触发
        this.stepEnterTriggerStart();
    }

    /**
     * 停止该引导
     */
    stop()
    {
        // 停止检测引导完成
        this.checkCompleteStop();

        // 停止检测步骤触发
        this.stepEnterTriggerStop();

        // 停止检测中断
        this.checkBreakoffStop();
        for(let step of this.stepList)
        {
            step.checkBreakoffStop();
        }

    }
    
    /**
     * 启动检测引导完成
     */
    checkCompleteStart()
    {
        if(this.completeTrigger)
            this.completeTrigger.start();
    }

    /**
     * 停止检测引导完成
     */
    checkCompleteStop()
    {
        if(this.completeTrigger)
            this.completeTrigger.stop();
    }

    /**
     * 启动检测步骤 Enter触发器
     */
    stepEnterTriggerStart()
    {
        for(let step of this.stepList)
        {
            step.enterTriggerStart();
        }
    }

    /**
     * 停止检测步骤 Enter触发器
     */
    stepEnterTriggerStop()
    {
        for(let step of this.stepList)
        {
            step.enterTriggerStop();
        }
    }

    /**
     * 当子节点触发器触发成功，被调用
     * @param stepAction 
     */
    onStepTriggerSuccess(stepAction: GuideStepAction)
    {
        // 停止检测步骤触发
        this.stepEnterTriggerStop();

        if(this._stepIndex == -1)
        {
            this.enter();
        }

        // 设置该步骤进入状态
        stepAction.enter();

        this._stepIndex = stepAction.index;
    }

    /**
     * 当整个组引导结束 将被调用
     */
    onEnd()
    {
        super.onEnd();
        this.stop();

        // 在这里发送协议该组引导结束，通知服务器
        Game.sender.guide.setGuideProgress( this._groupID );

        // 告诉管理器自己结束
        this.guideManager.onGroupEnd(this);
    }

}