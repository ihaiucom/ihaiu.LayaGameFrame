/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorListItemStruct from "../../Generates/ModuleActorGJC/ActorListItemStruct";
import ActorData from "../../../GameModule/DataStructs/ActorData";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";

export default class ActorListItem extends ActorListItemStruct
{
    dataSource:ActorData;
    /**
     * 渲染item
     */
    public RenderItem(data: ActorData) {
        this.dataSource = data;

        this.m_actorIcon.url  = Game.moduleModel.actor.getActor(data.id).headIcon;
        this.m_labfetter.text = format(TEXT.LVDot, 0);
        this.m_lablevel.text  = format(TEXT.LVDot, data.level);
        this.m_labname.text   = data.name
    }
}