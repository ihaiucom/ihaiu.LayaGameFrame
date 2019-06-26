import DailytaskConfig from '../../Config/ConfigExtends/DailytaskConfig';
import Game from '../../Game';
import TaskType = proto.TaskType;
import TaskState = proto.TaskState;
import TEXT from '../../Config/Keys/TEXT';

export default class DailyTaskData
{
    /** 任务id */
    id: number = 0;
	/** 任务类型： 日常/成就/剧本成就 */
    type: TaskType = TaskType.DailyTask;
    /**任务状态 */
    state: TaskState = TaskState.CannotAccept;
    /**任务要求 dailyTask配置require字段*/
    finishCondition: number = 0;
    /**参数1 dailyTask配置goal字段*/
    finishConditionValue1: number = 0;
    /**参数2 dailyTask配置s_goal字段*/
    finishConditionValue2: number = 0;
    /**完成进度 */
    curFinishValue: number = 0;

    setProtoData(data: proto.ITask)
	{
		for(let key in data)
		{
			this[key] = data[key];
		}
	}

    get config(): DailytaskConfig
    {
        let config = Game.config.dailytask.getConfig(this.id);
        return config;
    }

    get dailyTaskType(): proto.Event
    {
        return this.config.require;
    }

    /** 第一个参数--建筑id，当目标任务是建筑相关时才是准确的 */
    get buildingId(): number
    {
        return this.config.goal;
    }
   
    /** 活跃度：20 */
    get completionTxt(): string
    {
        return TEXT.DailyTaskActivity.format(this.config.Complete);
    }
    /** 完成度：1/3 */
    get taskCompletionTxt(): string
    {
        let times = 0;
        let requireData = this.config.getRequireData();
        return TEXT.DailyTaskCompletion.format(this.curFinishValue,requireData.count);
    }
}