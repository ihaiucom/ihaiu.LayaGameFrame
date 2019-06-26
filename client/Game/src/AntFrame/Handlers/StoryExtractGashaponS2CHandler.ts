import StoryExtractGashaponS2C = proto.StoryExtractGashaponS2C;
import Game from "../../Game";
var StoryExtractGashaponS2CHandler = function(msg: StoryExtractGashaponS2C)
{
    if (msg.error)
        return;

    Game.moduleModel.storyLottery.setProtoLotteryData( msg );
}

export {StoryExtractGashaponS2CHandler}
