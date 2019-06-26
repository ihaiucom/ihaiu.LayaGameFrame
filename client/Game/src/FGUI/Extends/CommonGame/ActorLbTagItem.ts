/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorLbTagItemStruct from "../../Generates/CommonGame/ActorLbTagItemStruct";
import LabelConfig from '../../../Config/ConfigExtends/LabelConfig';

export default class ActorLbTagItem extends ActorLbTagItemStruct
{
    updateView(config: LabelConfig) {
        this.m_title.text = config.name;
    }
}