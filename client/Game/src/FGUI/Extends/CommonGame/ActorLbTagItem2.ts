/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorLbTagItem2Struct from "../../Generates/CommonGame/ActorLbTagItem2Struct";
import LabelConfig from '../../../Config/ConfigExtends/LabelConfig';

export default class ActorLbTagItem2 extends ActorLbTagItem2Struct
{
    updateView(config: LabelConfig) {
        this.m_title.text = config.name;
    }
}