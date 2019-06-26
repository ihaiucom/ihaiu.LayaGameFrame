import GuideGroupAction from "./Actions/GuideGroupAction";
import GuideStepAction from "./Actions/GuideStepAction";
import GuideViewManager from "./Views/GuideViewManager";
import Game from "../Game";
import FindUIEnterTrigger from "./EnterTriggers/FindUIEnterTrigger";
import { PropGroupType } from "../GameFrame/Props/PropGroupType";
import GuideData from "../GameModule/DataStructs/GuideData";

export default class GuideManager
{
    /** 强引导 */
    current: GuideGroupAction;

    /** 弱引导 */
    helperGuide: GuideGroupAction;

    /** 视图 */
    view: GuideViewManager = new GuideViewManager();

    /** 组id */
    groupId: number;

    /**
     * 初始化
     */
    install()
    { 
        this.view.install();
        this.start();
    }

    // 只会使用一次,进入游戏之后
    start()
    {
        let groupId = Game.moduleModel.guide.getProgress();
        if ( !groupId || groupId == 0 )
        {
            this.groupId = Game.config.plot.firstGroupId; //第一组引导
        }
        else
        {
            this.groupId = groupId + 1; // 下一组引导开始
        }

        this.current = this.builderGroup( this.groupId );
        if ( this.current.checkHaveGuide() ){
            this.current.start(); // 开始引导
        }
    }


    /** 当前组引导结束 */
    onGroupEnd(group: GuideGroupAction)
    {
        this.view.onGroupEnd( group ); 
        this.groupId ++;
        this.current = this.builderGroup( this.groupId );
        if ( this.current.checkHaveGuide() ){
            this.current.start(); // 开始下一组引导
        }
    }

    /** 构建引导组 */
    builderGroup(groupId: number): GuideGroupAction
    {
        let group = new GuideGroupAction();
        group.setGroupID( groupId );
        let groupConfig = Game.config.guide.getGroupValues( groupId )
        let index = 0;
        for ( let d of groupConfig )
        {
            let step = new GuideStepAction();
            let enterTrigger = new FindUIEnterTrigger(); // 触发器
            let guideData = GuideData.Create( d );
            step.init( guideData, index, group, enterTrigger );
            group.stepList.push(step);
            index = index + 1
        }
        group.setGuideManager(this);
        return group;
    }
}