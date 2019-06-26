import Game from "../../Game";
import ItemData from '../../GameModule/DataStructs/ItemData';
import TaskType = proto.TaskType;

export default class DailyTaskSender
{
    /** 前往任务 */
    async aceptTask(taskId: number): Promise<boolean> {
        let s2c = await Game.net.AsyncGamerAcceptTaskC2S(TaskType.DailyTask,taskId);
        if (0 == s2c.error) {
        }
        return Promise.resolve(s2c.error == 0);
    }

    /** 领取任务奖励 */
    async getTaskReward(taskId: number): Promise<boolean> {
        let s2c = await Game.net.AsyncGamerGetTaskRewardC2S(TaskType.DailyTask,taskId);
        if (0 == s2c.error) {
        }
        return Promise.resolve(s2c.error == 0);
    }

    /** 领取礼包奖励 */
    async getGiftReward(rewardId: number, taskType: TaskType = TaskType.DailyTask): Promise<ItemData[]> {
        let items: ItemData[] = [];
        let s2c = await Game.net.AsyncGamerGetDailyTaskActivityDegreeRewardC2S(rewardId);
        if (0 == s2c.error && s2c.items) {
            s2c.items.forEach(item=>{
                let itemData = new ItemData();
                itemData.setProtoData(item);
                items.push(itemData);
            })
        }
        return Promise.resolve(items);
    }
}