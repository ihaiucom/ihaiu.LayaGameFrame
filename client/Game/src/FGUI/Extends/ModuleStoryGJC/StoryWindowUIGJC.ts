/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryWindowUIGJCStruct from "../../Generates/ModuleStoryGJC/StoryWindowUIGJCStruct";
import StoryWindow from "../../../GameModule/ViewWindows/StoryWindow";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import StorySeriesData from "../../../GameModule/DataStructs/StorySeriesData";

//-------------FGUI控制器-----------------
//剧本库--剧本详情     操作
export enum StoryViewType {
    List    = 0,    
    Content = 1
}

export default class StoryWindowUIGJC extends StoryWindowUIGJCStruct
{
    //窗口
    moduleWindow: StoryWindow;

    storyDataList:Array<StorySeriesData>

    //窗口初始化完毕
    onWindowInited(): void {
        this.m_btnBack.onClick(this, this.back);
    }

    back(): void {
        if (this.m_page.selectedIndex == 0) {
            this.moduleWindow.menuClose();  
            return
        }

        this.m_page.selectedIndex -= 1; 
    }

    updateView(type:number, datasource:any): void {
        this.m_page.selectedIndex = type;
        switch (type) {
            case StoryViewType.List:
                this.m_storyListView.updateView(datasource);
                break;
            case StoryViewType.Content:
                this.m_storyContentView.updateView(datasource, this.storyDataList);
                break;
            default:
                break;
        }
    }

    //主窗口显示时将被调
    onWindowShow(): void {
        this.storyDataList = Game.moduleModel.story.getStorySeriesList();
        if (this.storyDataList.length == 0) {
            //无剧本提示
            
            this.m_storyListView.m_listStory.numItems = 0;
            return;
        }
        this.updateView(StoryViewType.List ,this.storyDataList);

        Game.event.add(GameEventKey.Story_SelectView, this.updateView, this)
    }

    //主窗口关闭时将被调
    onWindowHide(): void {
        Game.event.remove(GameEventKey.Story_SelectView, this.updateView, this)
    }
}