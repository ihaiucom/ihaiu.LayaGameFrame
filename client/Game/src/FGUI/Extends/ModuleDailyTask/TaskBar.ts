/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import TaskBarStruct from "../../Generates/ModuleDailyTask/TaskBarStruct";
import Game from "../../../Game";
import DailyTaskModel from "../../../GameModule/DataModels/DailyTaskModel";
import SegmentProgressHelper from "../../../Libs/Helpers/SegmentProgressHelper";
import GiftButton from './GiftButton';
import DailyTaskGiftItem from "./DailyTaskGiftItem";

export default class TaskBar extends TaskBarStruct
{
    get model(): DailyTaskModel
    {
        return Game.moduleModel.dailyTask;
    }
    
    updateTaskBar()
    {
        let that = this;
        this.m_taskBar.value = that.model.currentProgressValue;
        let posY = 0;
        let marks = this.model.getMarkPostionXs(this.m_taskBar.width);
        marks.forEach((posx, index)=>{
            let giftItem = DailyTaskGiftItem.poolGet();
            giftItem.setXY(posx, posY);
            this.addChild(giftItem);
            giftItem.updateView(that.model.giftList[index],index == marks.length-1);
        });
    }
}