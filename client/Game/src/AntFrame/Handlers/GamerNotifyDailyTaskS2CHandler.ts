import GamerNotifyDailyTaskS2C = proto.GamerNotifyDailyTaskS2C;
import Game from "../../Game";
var GamerNotifyDailyTaskS2CHandler = function(msg: GamerNotifyDailyTaskS2C)
{
    if(0 == msg.error)
    {
        Game.moduleModel.dailyTask.setGiftProtoListData(msg);
    }
}

export {GamerNotifyDailyTaskS2CHandler}
