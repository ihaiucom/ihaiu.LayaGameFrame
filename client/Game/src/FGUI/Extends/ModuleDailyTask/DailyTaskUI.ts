/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DailyTaskUIStruct from "../../Generates/ModuleDailyTask/DailyTaskUIStruct";
import Game from '../../../Game';
import DailyTaskModel from '../../../GameModule/DataModels/DailyTaskModel';
import DailyTaskItem from './DailyTaskItem';
import SegmentProgressHelper from '../../../Libs/Helpers/SegmentProgressHelper';
import DailyTaskCtrl from '../../../GameModule/ViewWindows/DailyTaskCtrl';
import DailyTaskData from '../../../GameModule/DataStructs/DailyTaskData';
import DailyTaskGiftData from "../../../GameModule/DataStructs/DailyTaskGiftData";

export default class DailyTaskUI extends DailyTaskUIStruct
{
    get model(): DailyTaskModel
    {
        return Game.moduleModel.dailyTask;
    }
    
    onWindowInited(): void
    {
        Game.config.dailytaskreward.configList.forEach(config => {
            let giftData = new DailyTaskGiftData();
            giftData.id = config.id;
            this.model.giftDict.add(giftData.id, giftData);
        });
        this.m_list.itemRenderer = Laya.Handler.create(this, this.itemRenderer, null, false);
        let gl = this.m_list.displayObject.graphics;
        gl.clear();
        gl.drawRect(0, 0, this.m_list.width,  this.m_list.height, '#00FF0033', '#FF00FF', 2);
    }

    onWindowWillHide(): void
    {
    }
    
    // 窗口显示
    onWindowShow(): void
    {
        
        this.updateView();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
    }

    updateView()
    {
        this.m_taskBar.updateTaskBar();
        this.m_list.numItems = this.model.taskList.length;
    }

    

    itemRenderer(index: number, item: DailyTaskItem)
    {
        let data = this.model.taskList[index];
        item.updateView(data);
    }
}