import GamerGetTaskRewardS2C = proto.GamerGetTaskRewardS2C;
import Game from "../../Game";
var GamerGetTaskRewardS2CHandler = function(msg: GamerGetTaskRewardS2C)
{
    if (msg.error)
        return;
    Game.moduleModel.mainTask.onGetAward( msg );
}

export {GamerGetTaskRewardS2CHandler}
