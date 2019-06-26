/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryStudioIconStruct from "../../Generates/CommonGame/StoryStudioIconStruct";
import StudioStoryData from '../../../GameModule/DataStructs/StudioStoryData';
import Game from '../../../Game';

export default class StoryStudioIcon extends StoryStudioIconStruct
{
    // 金本，星级，icon
    updateView(data: StudioStoryData) {
        if(data) {
            this.m_isGoldStory.setSelectedIndex(data.storyType);//1普通本2金本
            this.m_starList.starNum = data.star;
            this.m_icon.icon = data.iconUrl;
        }
        this.play();
    }

    play() {
        let that = this;
        this.m_stopAnimation.setSelectedIndex(1);
        setTimeout(() => {
            that.m_stopAnimation.setSelectedIndex(2);
        }, Game.constant.studio.Story_StoryIcon_Duration);
    }
}