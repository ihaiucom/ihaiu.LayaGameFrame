/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import StudioEventEvaluationConfigStruct from "../ConfigStructs/StudioEventEvaluationConfigStruct";
import TEXT from '../Keys/TEXT';
import Game from '../../Game';

export default class StudioEventEvaluationConfig extends StudioEventEvaluationConfigStruct
{
	public get contentString(): string {
        return TEXT.StudioEventComment.format(this.content);
    }

    public get headIcon(): string {
        let icon = "";
        let avatarConfig = Game.config.avatar.getConfig(this.pic);
        if(avatarConfig) {
            icon = avatarConfig.iconUrl;
        }
        return icon;
    }
}