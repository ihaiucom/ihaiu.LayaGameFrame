/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryEventListItemStruct from "../../Generates/ModuleStoryGJC/StoryEventListItemStruct";
import Game from "../../../Game";
import StoryEventConfig from "../../../Config/ConfigExtends/StoryEventConfig";

export default class StoryEventListItem extends StoryEventListItemStruct
{
    public dataSource:any;
    
    public RenderItem(data: number): void {
        let config: StoryEventConfig = Game.config.storyEvent.getConfig(data);
        this.m_labEvent.text = config.title;
    }
}