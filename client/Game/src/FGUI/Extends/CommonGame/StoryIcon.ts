/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryIconStruct from "../../Generates/CommonGame/StoryIconStruct";
import { StudioStoryType } from '../../../GameModule/DataEnums/StudioEnum';
import StudioStoryData from '../../../GameModule/DataStructs/StudioStoryData';

export default class StoryIcon extends StoryIconStruct
{
    // 金本，星级，icon
    updateView(data: StudioStoryData) {
        if(data) {
            this.m_isGoldStory.setSelectedIndex(data.storyType);//1普通本2金本
            this.m_starList.starNum = data.star;
            this.m_icon.icon = data.iconUrl;
        }
    }

}