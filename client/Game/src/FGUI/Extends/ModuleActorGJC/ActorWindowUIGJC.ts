/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorWindowUIGJCStruct from "../../Generates/ModuleActorGJC/ActorWindowUIGJCStruct";
import ActorWindow from "../../../GameModule/ViewWindows/ActorWinodw";
import ActorData from "../../../GameModule/DataStructs/ActorData";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";

//-------------FGUI控制器-----------------
//艺人列表--艺人图鉴--艺人属性     操作
export enum ActorViewType {
    List  = 0,    
    Book = 1,
    Property = 2
}

export default class ActorWindowUIGJC extends ActorWindowUIGJCStruct
{
    //窗口
    moduleWindow: ActorWindow;

    actorDataList:Array<ActorData>

    //窗口初始化完毕
    onWindowInited(): void {
        this.m_btnBack.onClick(this, this.back);
    }

    back(): void {
        if (this.m_page.selectedIndex == 0) {
            this.moduleWindow.menuClose();  
            return
        }

        // this.m_page.selectedIndex -= 1; 
        //暂时
        this.m_page.selectedIndex = this.m_page.selectedIndex == 0 ? 2 : 0
    }

    updateView(type:number, datasource:any): void {
        this.m_page.selectedIndex = type;
        switch (type) {
            case ActorViewType.List:
                this.m_actorListView.updateView(datasource);
                break;
            case ActorViewType.Book:
                
                break;
            case ActorViewType.Property:
                this.m_ActorPropertyView.updateView(datasource, false);
                break;

            default:
                break;
        }
    }

    //主窗口显示时将被调
    onWindowShow(): void {
        this.actorDataList = Game.moduleModel.actor.actorList;
        if (this.actorDataList.length == 0) {
            //无艺人提示

            this.m_actorListView.m_listActor.numItems = 0;
            return;
        }
        this.updateView(ActorViewType.List ,this.actorDataList);

        Game.event.add(GameEventKey.Actor_SelectView, this.updateView, this)
    }

    //主窗口关闭时将被调
    onWindowHide(): void {
        Game.event.remove(GameEventKey.Actor_SelectView, this.updateView, this)
    }
}

