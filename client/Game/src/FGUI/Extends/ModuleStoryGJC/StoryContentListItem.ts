/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryContentListItemStruct from "../../Generates/ModuleStoryGJC/StoryContentListItemStruct";
import StorySeriesData from "../../../GameModule/DataStructs/StorySeriesData";
import StoryEventListItem from "./StoryEventListItem";
import Game from "../../../Game";

//-------------FGUI控制器-----------------
//未收集--已收集     GET
export enum StoryEventType {
    NO  = 0,    
    OK = 1
}

export default class StoryContentListItem extends StoryContentListItemStruct
{
    private eventDataList: Array<number>;

    public dataSource:StorySeriesData;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);

        this.m_btnWrite.onClick(this, this.changeName);
        this.m_listEvent.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
    }

    //改名
    public changeName() {

    }

    //List刷新回调
    renderListItem(index: number, item: StoryEventListItem): void  {
        item.RenderItem(this.eventDataList[index]);
        item.m_Get.selectedIndex = !this.dataSource.storyData.isGetEvent(item.dataSource) ? StoryEventType.NO : StoryEventType.OK;
    }

    RenderItem(data: StorySeriesData)  {
        this.dataSource   = data;

        this.m_storyItem.RenderItem(data);
        this.m_labName.text   = data.storyData.name;
        this.m_labType.text   = Game.config.label.getConfig(data.type).name;
        this.m_labContent.text= data.storyData.config.introduction;
        this.m_labView.text   = String(data.storyData.maxAudienceRatings);
        this.m_labScore.text  = String(data.storyData.maxScore);

        this.eventDataList    = data.storyData.allEventIds;
        this.m_listEvent.numItems = this.eventDataList.length;
    }
}