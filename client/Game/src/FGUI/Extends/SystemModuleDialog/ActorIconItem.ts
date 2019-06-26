/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorIconItemStruct from "../../Generates/SystemModuleDialog/ActorIconItemStruct";
import ActorData from "../../../GameModule/DataStructs/ActorData";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";

export default class ActorIconItem extends ActorIconItemStruct
{
    public dataSource:ActorData;

    public RenderItem(data: ActorData, remove: boolean) {
        if (remove) {
            this.reSet();
        } else {
            this.dataSource = data;
            this.m_actorIcon.url = Game.moduleModel.actor.getActor(data.id).headIcon;
            this.m_lablevel.text = format(TEXT.LVDot, data.level);
            this.m_labname.text = data.name;
            this.m_Build.selectedIndex = !this.dataSource.bulidId ? 0 : 1;
            if (this.dataSource.bulidId) {
                this.m_buildIcon.url = "";
                this.m_labBuild.text = Game.config.building.getConfig(this.dataSource.bulidId).name;
            }
        }
    }
    reSet(): void {
        this.dataSource = null;
        this.m_actorIcon.url = "ui://g17ofsczpz3x18";
        this.m_lablevel.text = "";
        this.m_labname.text  = TEXT.BuildActorRemove;
        this.m_Build.selectedIndex = 0;
    }
}