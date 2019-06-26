/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import StudioAudienceEvaluationConfigStruct from "../ConfigStructs/StudioAudienceEvaluationConfigStruct";
import Game from '../../Game';

export default class StudioAudienceEvaluationConfig extends StudioAudienceEvaluationConfigStruct
{

    get headIconUrl(): string {
        let icon = "";
        let avatarConfig = Game.config.avatar.getConfig(this.pic);
        if(avatarConfig) {
            icon = avatarConfig.iconUrl;
        }
        return icon;
    }
	
}