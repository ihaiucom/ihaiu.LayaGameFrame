/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryTypeIconStruct from "../../Generates/ModuleStudio/StoryTypeIconStruct";
import StudioStoryData from '../../../GameModule/DataStructs/StudioStoryData';
import StudioContinuedData from '../../../GameModule/DataStructs/StudioContinuedData';

export default class StoryTypeIcon extends StoryTypeIconStruct
{
    updateView(data: StudioStoryData|StudioContinuedData) {
        let d = <any>data;
        this.m_title.text = d.typeString;
        this.m_icon.icon = d.typeIcon;
    }
}