import MModel from '../../GameFrame/Module/MModel';
import GamerNotifyTaskS2C = proto.GamerNotifyTaskS2C;
import GamerGetTaskRewardS2C = proto.GamerGetTaskRewardS2C;
import GameEventKey from '../../GameEventKey';
import Game from '../../Game';
export default class GuideModule extends MModel {
    private groupId: number;
    constructor() {
        super();   
    }

	setProgress(progress): void {
        this.groupId = progress
    }
    
	getProgress(): number {
        return this.groupId;
    }
}