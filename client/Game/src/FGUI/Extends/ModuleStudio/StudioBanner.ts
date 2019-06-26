/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioBannerStruct from "../../Generates/ModuleStudio/StudioBannerStruct";
import StudioStoryData from '../../../GameModule/DataStructs/StudioStoryData';

export default class StudioBanner extends StudioBannerStruct
{
    updateView(data:StudioStoryData) {
        this.m_title.text = data.storyNameAll;
    }
}