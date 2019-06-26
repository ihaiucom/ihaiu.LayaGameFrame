/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActivityDay7ActorStruct from "../../Generates/ModuleDay7Activity/ActivityDay7ActorStruct";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";

export default class ActivityDay7Actor extends ActivityDay7ActorStruct
{
    //窗口初始化完毕
    onWindowInited(): void {
        this.m_btnClose.onClick(this, this.close);
    }

    close(): void {
        Game.event.dispatch(GameEventKey.ActivityDay7_CloseWindowUI);
    }

    updateView(actorId: number): void {
        if (Game.moduleModel.actor.getActor(actorId)) {
            this.m_state.selectedIndex = 1;
        } else {
            this.m_state.selectedIndex = 0;
            let actorurl= Game.config.avatar.getConfig(actorId).bodyIconUrl;
            this.m_imgActor.url = actorurl;
        }
        
    }
}