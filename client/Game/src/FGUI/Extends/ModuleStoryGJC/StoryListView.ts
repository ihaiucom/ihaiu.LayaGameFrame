/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryListViewStruct from "../../Generates/ModuleStoryGJC/StoryListViewStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import StoryListItem from "./StoryListItem";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { StoryViewType } from "./StoryWindowUIGJC";
import { StoryType } from "../../../GameModule/DataEnums/StoryType";
import StorySeriesData from "../../../GameModule/DataStructs/StorySeriesData";

export default class StoryListView extends StoryListViewStruct
{
    storyDataList: Array<StorySeriesData>;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);

        this.m_listStory.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_listStory.on(fairygui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_tabStory.m_tab.on(fairygui.Events.STATE_CHANGED, this, this.changeTab);
    }

    //List刷新回调
    renderListItem(index: number, item: StoryListItem): void  {
        item.RenderItem(this.storyDataList[index]);
    }

    //List点击回调
    clickListItem(target: StoryListItem, event: Event): void  {
        Game.sender.story.readCommentList(target.dataSource.id);
        Game.event.dispatch(GameEventKey.Story_SelectView, StoryViewType.Content, target.dataSource);
    }

    //更换标签
    changeTab(): void {
        let index= this.m_tabStory.m_tab.selectedIndex;
        let name = this.m_tabStory.m_tab.getPageName(index);
        let type = StoryType[name]
        if (type) {
            this.storyDataList = Game.moduleModel.story.getStorySeriesListByType(type);            
        } else {
            this.storyDataList = Game.moduleModel.story.getStorySeriesList();
        }
        this.m_listStory.numItems = this.storyDataList.length;
    }

    //刷新view
    updateView(list: Array<StorySeriesData>): void {
        this.storyDataList = list;
        this.m_listStory.numItems = this.storyDataList.length;
        this.m_tabStory.m_tab.selectedIndex = 0;
    }

    //整理艺人数据
    disposalActorData(): void {
        
    }
}