/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryListItemStruct from "../../Generates/ModuleStoryGJC/StoryListItemStruct";
import StorySeriesData from "../../../GameModule/DataStructs/StorySeriesData";

export default class StoryListItem extends StoryListItemStruct
{
    dataSource:StorySeriesData;
    /**
     * 渲染item
     */
    public RenderItem(data: StorySeriesData) {
        this.dataSource = data;

        this.m_evolve.selectedIndex = data.storyType - 1;        
        this.m_icon.url = data.storyData.icon;
        this.m_star.m_StarNum.selectedIndex = data.storyData.star - 1;
        
    }
}