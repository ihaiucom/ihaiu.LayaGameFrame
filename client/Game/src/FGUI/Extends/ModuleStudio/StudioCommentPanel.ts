/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCommentPanelStruct from "../../Generates/ModuleStudio/StudioCommentPanelStruct";
import StudioResultData from "../../../GameModule/DataStructs/StudioResultData";
import StudioAudienceEvaluationConfig from '../../../Config/ConfigExtends/StudioAudienceEvaluationConfig';

export default class StudioCommentPanel extends StudioCommentPanelStruct
{
    dataList: StudioAudienceEvaluationConfig[];
    
    updateView(data: StudioResultData) {
        this.m_contentList.updateView(data);
    }
}