/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorListViewStruct from "../../Generates/ModuleActorGJC/ActorListViewStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import ActorListItem from "./ActorListItem";
import ActorData from "../../../GameModule/DataStructs/ActorData";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { ActorViewType } from "./ActorWindowUIGJC";
import PropId from "../../../GameFrame/Props/PropId";

export default class ActorListView extends ActorListViewStruct
{
    private dialogCtrl: DialogCtrl;

    actortDataList: Array<ActorData>;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);

        this.m_listActor.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_listActor.on(fairygui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_tabList.m_tab.on(fairygui.Events.STATE_CHANGED, this, this.changeTab);
    }

    //List刷新回调
    renderListItem(index: number, item: ActorListItem): void  {
        item.RenderItem(this.actortDataList[index]);
    }

    //List点击回调
    clickListItem(target: ActorListItem, event: Event): void  {
        Game.event.dispatch(GameEventKey.Actor_SelectView, ActorViewType.Property, target.dataSource);
    }

    //更换标签
    changeTab(): void {
        // let index= this.m_tabList.m_tab.selectedIndex;
        // let name = this.m_tabList.m_tab.getPageName(index);
        // let type = PropId[name]
        // if (type) {
        //     this.actortDataList = Game.moduleModel.actor.getMatchingActors(type);            
        // } else {
        //     this.actortDataList = Game.moduleModel.actor.getMatchingActors(index);
        // }
        // this.m_listActor.numItems = this.actortDataList.length;
    }

    //刷新view
    updateView(data: any): void {
        if (!data.actor) {
            this.actortDataList = data;            
        } else {
            this.actortDataList = Game.moduleModel.actor.actorList;
        }
        
        this.m_listActor.numItems = this.actortDataList.length;
        this.m_tabList.m_tab.selectedIndex = 0;
    }

    //整理艺人数据
    disposalActorData(): void {
        
    }

    //窗口显示时将被调
    onWindowShow(): void  {

        //更新view
        Game.net.gamerNotifyActorChangeS2C.on(this.updateView, this);
    }

    //窗口关闭时将被调
    onWindowHide(): void  {
        Game.net.gamerNotifyActorChangeS2C.off(this.updateView, this);
    }
}