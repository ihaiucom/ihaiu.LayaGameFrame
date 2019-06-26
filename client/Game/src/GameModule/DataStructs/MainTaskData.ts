import DTStoryEffect from '../../Config/ConfigExtends/DTStoryEffect';
import Game from '../../Game';
import MaintaskConfig from '../../Config/ConfigExtends/MaintaskConfig';
export default class TaskData {

    private _id: number;
    private _type: number;
    private _state: number;
    private _triggerCondition: number; // 触发条件
    private _triggerConditionValue: number; // 触发条件参数
    private _finishCondition: number; // 任务要求
    private _finishConditionValue1: number; // 要求参数1
    private _finishConditionValue2: number; // 要求参数2
    private _curFinishValue: number; // 完成进度
    private _configData: MaintaskConfig;
    private _data: Array<any>;

    constructor()  {

    }

    //创引导数据单位
	static Create( msg ): TaskData {
        let guide = new TaskData();
        guide._id = msg.id;
        guide._type = msg.type;
        guide._state = msg.state;
        guide._curFinishValue = msg.curFinishValue;
        guide._triggerCondition = msg.triggerCondition;
        guide._triggerConditionValue = msg.triggerConditionValue;
        guide._finishCondition = msg.finishCondition;
        guide._finishConditionValue1 = msg.finishConditionValue1;
        guide._finishConditionValue2 = msg.finishConditionValue2;

        guide._configData = Game.config.maintask.getConfig( msg.id )
		return guide;
    }
    
    /**
     * 任务id
     */
    get ID(): number{
        return this._id
    }

    /**
     * 任务类型
     */
    get type(): number{
        return this._type
    }

    /**
     * 表格配置数据
     */
    get configData(): MaintaskConfig{
        return this._configData;
    }
 
    /**
     * 服务器数据
     */
    get serverData(): Array<any>{
        return this._data;
    }

    /**
     * 任务状态
     */
    get state(): number{
        return this._state;
    }

    /**
     * 任务进度
     */
    get finishValue(): number{
        return this._curFinishValue;
    }

    /**
     * 任务完成参数1
     */
    get finishParam(): number{
        return this._finishCondition;
    }    

    /**
     * 任务完成参数1
     */
    get finishParam1(): number{
        return this._finishConditionValue1;
    }

    /**
     * 任务完成参数2
     */
    get finishParam2(): number{
        return this._finishConditionValue2;
    }
}