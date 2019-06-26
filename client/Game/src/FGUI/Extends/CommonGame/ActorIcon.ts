/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorIconStruct from "../../Generates/CommonGame/ActorIconStruct";
import TEXT from '../../../Config/Keys/TEXT';

export default class ActorIcon extends ActorIconStruct
{
    public addBodyIcon(icon: string): void {
        this.m_icon.icon = icon;
    }

    set iconUrl(icon: string) {
        this.m_icon.icon = icon;
    }

    set level(lv: number) {
        this.m_level.text = TEXT.LVDot.format(lv)
    }
}