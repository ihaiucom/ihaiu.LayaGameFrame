/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioStoryCollectStateStruct from "../../Generates/ModuleStudio/StudioStoryCollectStateStruct";
import StudioStoryData from "../../../GameModule/DataStructs/StudioStoryData";

export default class StudioStoryCollectState extends StudioStoryCollectStateStruct
{
    updateView(data: StudioStoryData) {
        let isCollect = data.isEventComplete;
        this.m_isCollect.setSelectedIndex(Number(isCollect));
        if(!isCollect) {
            this.m_count.text = data.eventString;
        }
    }
}