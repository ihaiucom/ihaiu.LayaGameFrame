/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DailyTaskGiftItemStruct from "../../Generates/ModuleDailyTask/DailyTaskGiftItemStruct";
import DailyTaskGiftData from '../../../GameModule/DataStructs/DailyTaskGiftData';
import Game from '../../../Game';

export default class DailyTaskGiftItem extends DailyTaskGiftItemStruct
{
    rewardData: DailyTaskGiftData;
    
    updateView(data: DailyTaskGiftData, isLast: boolean = false)
    {
        this.rewardData = data;
        this.m_complete.text = data.config.complete + "";
        this.m_gitBtn.m_icon.icon = data.iconUrl;
        this.m_isLastBox.setSelectedIndex(isLast?1:0);
        let isReached = Game.moduleModel.dailyTask.currentComplete >= data.config.complete;
        this.m_isReached.setSelectedIndex(isReached?1:0);
    }

    async gitBtnOnClick()
    {
        let items = await Game.sender.dailyTaskSender.getGiftReward(this.rewardData.id);
        if(items)
        {
            Game.system.rewardDialog(items, false);
        }
    }
    
    /** 丢回对象池 */
    public poolRecover()
    {
        this.clear();
        this.removeFromParent();
        Laya.Pool.recover(DailyTaskGiftItem.URL, this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): DailyTaskGiftItem
    {
        let item = <DailyTaskGiftItem>Laya.Pool.getItem(DailyTaskGiftItem.URL);
        if(!item) {
            item = DailyTaskGiftItem.createInstance();
        }
        item.m_gitBtn.onClick(item, item.gitBtnOnClick);
        return item;
    }

    clear()
    {
        this.m_gitBtn.offClick(this, this.gitBtnOnClick);

    }
}