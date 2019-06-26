import GetStoryExtractInfoS2C = proto.GetStoryExtractInfoS2C;
import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
import StoryLotteryModel from "../../GameModule/DataModels/StoryLotteryModel";
var GetStoryExtractInfoS2CHandler = function(msg: GetStoryExtractInfoS2C)
{
    if (msg.error)
        return;
    Game.moduleModel.storyLottery.setProtoData( msg );
}

export {GetStoryExtractInfoS2CHandler}
