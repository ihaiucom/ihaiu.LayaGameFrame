/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioEventDialogStruct from "../../Generates/ModuleStudio/StudioEventDialogStruct";
import StudioEventData from "../../../GameModule/DataStructs/StudioEventData";
import Game from '../../../Game';
import TEXT from '../../../Config/Keys/TEXT';
import StudioStep = proto.StudioStep;

export default class StudioEventDialog extends StudioEventDialogStruct
{
    get event(): StudioEventData {
        return Game.moduleModel.studio.current.event;
    }

    get storyName(): string {
        return Game.moduleModel.studio.current.story.storyName;
    }
    
    public get eventList():fairygui.GList 
    {
        return this.m_phone.m_selectPanel.m_list;
    }

    public get m_startBtn():fairygui.GButton
    {
        return this.m_comment.m_nextBtn;
    }
    
    // 窗口显示
    onShow(): void
    {
        this.eventList.on(fairygui.Events.CLICK_ITEM, this, this.eventItemOnClick);
        this.m_startBtn.onClick(this,this.studioStartOnClick);
        this.updateCommonView();
        if(Game.moduleModel.studio.current.step == StudioStep.eventEvaluations) {
            if(!this.event.eventOption) {
                // throw "studioData.event.eventOption no exist";
            }
            let index = this.event.eventOption -1;
            if(index < 0) index = 0;
            this.commentListWithIndex(index);
        }else {
            
            this.optionSelectView();
        }
    }

    // 窗口隐藏
    onWindowHide(): void
    {
    }

    updateCommonView() {

    }

    optionSelectView() {
        this.m_phone.m_content.text = TEXT.StudioEventContent.format(this.storyName, this.event.detailPart1);
        this.m_phone.m_selectPanel.updateView();
    }

    async eventItemOnClick() {

        let index = this.eventList.selectedIndex;
        
        let s2c = await Game.sender.studio.eventOptionSelect(index + 1);
        if(s2c) {
            this.commentListWithIndex(index)
        }
    }

    async commentListWithIndex(index: int) {
        // this.m_commentTitle.text = TEXT.StudioCommentTitle.format(this.event.eventEvaluations.length);
        this.m_phone.m_content.text = this.event.detail;
        //显示评论动画
        this.m_comment.updateView(this.event);
    }

    /** 开始拍摄 */
    studioStartOnClick() {
        this.m_comment.stopAnimations();
        Game.sender.studio.studioStart();
    }
}