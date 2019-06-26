/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActivityDay7WindowUIStruct from "../../Generates/ModuleDay7Activity/ActivityDay7WindowUIStruct";
import ActivityDay7Window from "../../../GameModule/ViewWindows/ActivityDay7Window";
import Game from "../../../Game";
import CountActivitiesData from "../../../GameModule/DataStructs/CountActivitiesData";
import GameEventKey from "../../../GameEventKey";
import { ItemType } from "../../../GameModule/DataEnums/ItemType";

export default class ActivityDay7WindowUI extends ActivityDay7WindowUIStruct
{
    //窗口
    moduleWindow: ActivityDay7Window;
    //七日活动数据
    activityData: any;
    //七日活动详情
    activityInfos: Array<CountActivitiesData> = [];


    //窗口初始化完毕
    onWindowInited(): void {
        
    }

    //关闭界面
    close(): void  {
        this.moduleWindow.menuClose();
    }

    //刷新7日窗口
    updateView(msg?: any): void {
        this.activityData = Game.moduleModel.activity.getActivity(40101001);
        this.m_content.updateView(this.activityData, this.activityInfos);
        if (!msg) {
            this.m_page.selectedIndex = 0;
        } else {
            let info = this.activityInfos[this.activityData.currentDay - 1];
            let item = info.getReward().config.fixedItems[0];
            if (item.itemType != ItemType.actor) {
                this.m_page.selectedIndex = 0;
            } else {
                this.m_page.selectedIndex = 1;
                this.m_actor.updateView(item.itemId);
            }
        }
    }

    //主窗口显示时将被调
    onWindowShow(): void  {
        //-------------测试数据
        // Game.moduleModel.activity.setActivityList({countActivity:{id: 40101001,currentDay:1, alreadyGetDay:0 }});


        this.activityInfos= [];
        let day7ConfigList = Game.config.countActivities.getConfigList();
        for (let i = 0; i < day7ConfigList.length; i++) {
            let day7Data = CountActivitiesData.Create(day7ConfigList[i]);
            this.activityInfos.push(day7Data);
        }
        // this.activityInfos.sort(function (a, b):number {
		// 	return a.id - b.id;
        // });

        this.updateView();

        Game.net.getActivityRewardS2C.on(this.updateView, this);
        Game.event.add(GameEventKey.ActivityDay7_CloseWindowUI, this.close, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        Game.net.getActivityRewardS2C.off(this.updateView, this);
        Game.event.remove(GameEventKey.ActivityDay7_CloseWindowUI, this.close, this);
    }
}