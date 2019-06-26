import BaseAction from "./BaseAction";
import GuideGroupAction from "./GuideGroupAction";
import BaseEnterTrigger from "../EnterTriggers/BaseEnterTrigger";
import BaseBreakoffTrigger from "../BreakoffTriggers/BaseBreakoffTrigger";
import GuideData from "../../GameModule/DataStructs/GuideData";

/**
 * 引导步骤
 */
export default class GuideStepAction extends BaseAction
{
    /** 父节点 */
    group: GuideGroupAction;

    /** 步骤索引 */
    index: number;

    /** Enter触发器 */
    enterTrigger: BaseEnterTrigger;

    /** 步骤配置 */
    guideStepConfig: GuideData;

    init( _stepConfig: GuideData, _index: number, _group: GuideGroupAction, _enterTrigger: BaseEnterTrigger ){
        this.guideStepConfig = _stepConfig;
        this.enterTrigger = _enterTrigger;
        this.enterTrigger.step = this;
        this.index = _index;
        this.group = _group;
    }

    /**
     * 启动触发器监听
     */
    enterTriggerStart()
    {
        if(this.enterTrigger)
            this.enterTrigger.start();
    }

    /**
     * 停止触发器监听
     */
    enterTriggerStop()
    {
        if(this.enterTrigger)
            this.enterTrigger.stop();
    }
    
    /**
     * 触发成功, 将被调用
     */
    onTriggerSuccess(tigger?: BaseEnterTrigger)
    {
        this.enterTriggerStop();
        this.group.onStepTriggerSuccess(this);
    }

    onEnter()
    {
        super.onEnter();
        this.guideManager.view.onStepEnter(this);
    }
    
    /**
     * 中断、丢失
     */
    onBreakoff(breakoffer?: BaseBreakoffTrigger)
    {
        this.guideManager.view.onStepBreakoff(this);
        this.group.onBreakoff(this);
    }

    // 一个引导结束，
    onEnd()
    {
        super.onEnd();

        this.guideManager.view.onStepEnd(this);

        // 停止 检测中断、丢失
        this.checkBreakoffStop();

        // 停止触发器监听
        this.enterTriggerStop();
        
        // 告诉组 自己结束
        this.group.onStepEnd(this);
    }

}