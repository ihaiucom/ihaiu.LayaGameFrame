/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorLbPropItemStruct from "../../Generates/CommonGame/ActorLbPropItemStruct";

export default class ActorLbPropItem extends ActorLbPropItemStruct
{
    updateView(data: string) {
        this.m_type.setSelectedPage(data);
    }
}