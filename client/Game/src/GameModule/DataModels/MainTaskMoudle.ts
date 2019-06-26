import MModel from '../../GameFrame/Module/MModel';
import Dictionary from '../../Libs/Helpers/Dictionary';
import MainTaskData from '../DataStructs/MainTaskData';
import GamerNotifyTaskS2C = proto.GamerNotifyTaskS2C;
import GamerGetTaskRewardS2C = proto.GamerGetTaskRewardS2C;
import GameEventKey from '../../GameEventKey';
import Game from '../../Game';
export default class MainTaskModel extends MModel {
    private dict: Dictionary<string, MainTaskData>;
    private data: MainTaskData;
    constructor() {
        super();   
        this.dict = new Dictionary<string, MainTaskData>();
    }

	setData(data): void {
        let taskData: MainTaskData = MainTaskData.Create(data);
        this.data = taskData;
        Game.event.dispatch(GameEventKey.MainTask_state);
    }
    
	getData(): MainTaskData {
        return this.data;
    }

    onGetAward( msg: GamerGetTaskRewardS2C ): void{
        Game.event.dispatch(GameEventKey.MainTask_award);
    }
}