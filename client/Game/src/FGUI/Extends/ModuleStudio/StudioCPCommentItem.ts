/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCPCommentItemStruct from "../../Generates/ModuleStudio/StudioCPCommentItemStruct";
import StudioAudienceEvaluationConfig from "../../../Config/ConfigExtends/StudioAudienceEvaluationConfig";

export default class StudioCPCommentItem extends StudioCPCommentItemStruct
{
    updateView(config: StudioAudienceEvaluationConfig) {
        this.m_headIcon.icon = config.headIconUrl;
        this.m_name.text = config.name;
        this.m_content.text = config.content;
    }
}