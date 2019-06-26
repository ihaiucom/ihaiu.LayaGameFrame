/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActivityDay7ContentStruct from "../../Generates/ModuleDay7Activity/ActivityDay7ContentStruct";
import CountActivitiesData from "../../../GameModule/DataStructs/CountActivitiesData";
import Game from "../../../Game";
import Day7ItemButton from "./Day7ItemButton";
import GameEventKey from "../../../GameEventKey";
import MsgKey from "../../../Config/Keys/MsgKey";

export default class ActivityDay7Content extends ActivityDay7ContentStruct
{
    //七日活动数据
    activityData: any;
    //七日活动详情
    activityInfos: Array<CountActivitiesData> = [];

    private isSelect: boolean = true;

    //窗口初始化完毕
    onWindowInited(): void {
        this.m_listDay7Item.itemRenderer = Laya.Handler.create(this, this.renderList, null, false);
        this.m_btnGet.onClick(this, this.getReward);
        this.m_btnDouble.onClick(this, this.doubleReward);
        this.m_btnClose.onClick(this, this.close);
    }

    close(): void {
        Game.event.dispatch(GameEventKey.ActivityDay7_CloseWindowUI);
    }

    //前六日List刷新回调
    renderList(index: number, item: Day7ItemButton): void  {
        item.renderItem(index, this.activityInfos[index]);
        item.stateIndex(this.activityData.currentDay, this.activityData.alreadyGetDay);
    }

    getReward(): void {
        if (this.activityData.currentDay != this.activityData.alreadyGetDay) {
            Game.sender.activity.getActivityReward(40101001)
        } else {
            Game.system.toastText("已领取");
        }
        
    }

    doubleReward(): void {
        if (this.m_double.selectedIndex == 1) {
            this.isSelect = this.m_btnDouble.selected
            this.m_btnGet.title = this.isSelect ? "领取双倍" : "领取";
        }
    }

    updateList(): void {
        let infos = this.activityInfos.slice(0, this.activityInfos.length - 1);
        this.m_listDay7Item.numItems = infos.length;
    }

    updateActor(): void {
        let info = this.activityInfos[this.activityInfos.length - 1];
        let actorid = info.getReward().config.fixedItems[0].itemId
        let actorurl= Game.config.avatar.getConfig(actorid).bodyIconUrl;
        this.m_imgActor.url = this.m_btnDay7Actor.icon = actorurl;
    }

    updateView(activityData: any, activityInfos: Array<CountActivitiesData>): void {
        this.activityData = activityData;
        this.activityInfos= activityInfos;
        this.updateList();
        this.updateActor();

        let info = this.activityInfos[this.activityData.currentDay - 1];
        let reward = info.getReward();
        if (reward.config.multipleReward == 1) {
            this.m_double.selectedIndex = 0;
            this.m_btnDouble.selected = false;
        } else {
            this.m_double.selectedIndex = 1;
            this.m_btnDouble.selected = this.isSelect;
            this.m_btnGet.title = this.isSelect ? "领取双倍" : "领取";
        }
    }

    hideView(): void {
        
    }
}