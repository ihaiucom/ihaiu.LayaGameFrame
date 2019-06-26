import MModel from '../../GameFrame/Module/MModel';
import DailyTaskData from '../DataStructs/DailyTaskData';
import Dictionary from '../../Libs/Helpers/Dictionary';
import Game from '../../Game';
import DailytaskrewardConfig from '../../Config/ConfigExtends/DailytaskrewardConfig';
import GamerNotifyTaskS2C = proto.GamerNotifyTaskS2C;
import GamerNotifyDailyTaskS2C = proto.GamerNotifyDailyTaskS2C;

import TaskState = proto.TaskState;
import TaskType = proto.TaskType;

import SegmentProgressHelper from '../../Libs/Helpers/SegmentProgressHelper';
import DailyTaskGiftData from '../DataStructs/DailyTaskGiftData';

export default class DailyTaskModel extends MModel
{
    isTest: boolean = true;
    
    public taskDict: Dictionary<number, DailyTaskData> = new Dictionary<number, DailyTaskData>();
    public giftDict: Dictionary<number, DailyTaskGiftData> = new Dictionary<number, DailyTaskGiftData>();
    public get giftList(): DailyTaskGiftData[]
    {

        let list = this.giftDict.getValues();
        list.sort((a,b)=>{
            return a.id > b.id?1:-1;
        });
        return list;
    }
    public get taskList(): DailyTaskData[]
    {
        let list = this.taskDict.getValues();
        list.sort((a,b)=>{
            return a.id > b.id?1:-1;
        });
        list.sort((a,b)=>{
            return a.state == TaskState.TaskFinish?1:-1;
        })
        return list;
    }
    /** 特殊建筑id，表示所有建筑 */
    public SpecialBuildingId: number = 9999;
    
    /**当前活跃度 */
    public currentComplete: number = 0;

    constructor()
    {
        super();
        
        if(this.isTest)
        {
            this.unitTest();
                    
        }
    }

    /**礼包x轴坐标 */
    getMarkPostionXs(barWidth: number): number[]
    {
        let that = this;
        let posXs = [];
        let marks = [];
        this.giftList.forEach(gift=>{
            marks.push(that.getProgressValue(gift.config.complete));
        });
        marks.forEach(pos=>{
            let posX = Math.floor(barWidth * pos / 100);
            posXs.push(posX);
        });
        return posXs;
    }

    public get currentProgressValue(): number
    {
        return this.getProgressValue(this.currentComplete);
    }

    private getProgressValue(val: number): number
    {
        let marks = [];
        this.giftList.forEach(gift=>{
            marks.push(gift.config.complete);
        });
        return SegmentProgressHelper.getRate(val, marks);
    }

    setGiftProtoListData(msg: GamerNotifyDailyTaskS2C)
    {
        
        if(msg.activityDegree > 0)
        {
            this.currentComplete =  msg.activityDegree;
        }
        msg.dailyGifts.forEach(gift=>{
            let giftData = new DailyTaskGiftData();
            giftData.setProtoData(gift);
            this.giftDict.add(giftData.id, giftData);
        });
    }
    
    setTaskProtoListData(msg: GamerNotifyTaskS2C)
    {
        msg.tasks.forEach(task=>{
            if(TaskType.DailyTask == task.type)
            {
                let taskData = new DailyTaskData();
                taskData.setProtoData(task);
                this.taskDict.add(taskData.id, taskData);
            }
        });
    }

    getTaskById(id: number): DailyTaskData
    {
        return this.taskDict.getValue(id);
    }

    getBtnStateById(taskId: number)
    {
        let state = this.getTaskById(taskId).state;
        if(state < TaskState.Complete)
            return 0;
        else if(state < TaskState.TaskFinish)
            return 1;
        return 2;
    }

    unitTest()
    {
        let giftMsg = new GamerNotifyDailyTaskS2C();
        let msg = new GamerNotifyTaskS2C();
        giftMsg.activityDegree = 31;
        giftMsg.dailyGifts = [{id:1, state:0},{id:2, state:0},{id:3, state:0}];
        msg.tasks = [{id:10001, type:2, state:1,curFinishValue:0},{id:10002, type:2, state:1,curFinishValue:1},{id:10003, type:2, state:1,curFinishValue:0},{id:10004, type:2, state:1,curFinishValue:1},{id:10005, type:2, state:1,curFinishValue:0}]
    
        this.currentComplete = giftMsg.activityDegree;
        giftMsg.dailyGifts.forEach(gift=>{
            let giftData = new DailyTaskGiftData();
            giftData.setProtoData(gift);
            this.giftDict.add(giftData.id, giftData);
        });
        msg.tasks.forEach(task=>{
            let taskData = new DailyTaskData();
            taskData.setProtoData(task);
            this.taskDict.add(taskData.id, taskData);
        });
    }
    // /** 已有建筑列表 */
    // private get buildedBuildingList()
    // {
    //     let list = [];
    //     Game.moduleModel.building.buildedBuildingList.forEach(buildingData=>{
    //         list.push(buildingData.id);
    //     });
    //     return list;
    // }

    // public get taskConfigList()
    // {
    //     let list = [];
    //     let configList = Game.config.dailytask.configList;
    //     configList.forEach(config=>{
    //         let index = this.buildedBuildingList.findIndex(v=>{
    //             return v == config.building;
    //         });
    //         index != -1 && (list.push(config));
    //     });
    //     return list;
    // }


}