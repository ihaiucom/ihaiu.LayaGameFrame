/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import DailyTaskItemStruct from "../../Generates/ModuleDailyTask/DailyTaskItemStruct";
import DailyTaskData from '../../../GameModule/DataStructs/DailyTaskData';
import Game from '../../../Game';
import { MenuId } from "../../../GameModule/MenuId";
import DailyTaskCtrl from '../../../GameModule/ViewWindows/DailyTaskCtrl';

export default class DailyTaskItem extends DailyTaskItemStruct
{
    taskData: DailyTaskData;
    
    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);

        this.m_goBtn.onClick(this, this.doTaskAction);
    }
    
    updateView(data: DailyTaskData)
    {
        window['btn'] = this.m_goBtn;
        this.taskData = data;
        this.m_name.text = data.config.name;
        this.m_complete.text = data.completionTxt;
        this.m_taskCompletion.text = data.taskCompletionTxt;
        this.setBtnState();
    }

    setBtnState()
    {
        let selectedIndex = Game.moduleModel.dailyTask.getBtnStateById(this.taskData.id);
        this.m_stateCtrl.setSelectedIndex(selectedIndex);
    }

    async doTaskAction()
    {
        let state = this.taskData.state;
        switch (state) {
            case proto.TaskState.CanAccept:
                {
                   let s2c = await Game.sender.dailyTaskSender.aceptTask(this.taskData.id);
                   if(s2c)
                    DailyTaskCtrl.doTask(this.taskData);
                }
                break;
            case proto.TaskState.Doing:
            {
                DailyTaskCtrl.doTask(this.taskData);
            }
            break;
            case proto.TaskState.Complete:
                {
                   let s2c = await Game.sender.dailyTaskSender.getTaskReward(this.taskData.id);
                   if(s2c)
                   {
                       this.setBtnState();
                   }
                }
                break;
            case proto.TaskState.TaskFinish:
            {
            }
            break;
        
            default:
                break;
        }
    }
}