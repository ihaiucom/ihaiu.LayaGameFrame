/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorIcon2Struct from "../../Generates/CommonGame/ActorIcon2Struct";
import ActorData from '../../../GameModule/DataStructs/ActorData';

export default class ActorIcon2 extends ActorIcon2Struct
{
    updateView(actor: ActorData) {
        this.m_icon.icon = actor.headIcon;
        this.m_level.text = actor.level+"";
    }
}