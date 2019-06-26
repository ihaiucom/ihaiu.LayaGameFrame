/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCPCommentPanelStruct from "../../Generates/ModuleStudio/StudioCPCommentPanelStruct";
import StudioResultData from '../../../GameModule/DataStructs/StudioResultData';
import StudioAudienceEvaluationConfig from '../../../Config/ConfigExtends/StudioAudienceEvaluationConfig';

export default class StudioCPCommentPanel extends StudioCPCommentPanelStruct
{
    updateView(data: StudioResultData) {
        let configList: StudioAudienceEvaluationConfig[] = data.audienceEvaluationConfigs;
        
    }
}