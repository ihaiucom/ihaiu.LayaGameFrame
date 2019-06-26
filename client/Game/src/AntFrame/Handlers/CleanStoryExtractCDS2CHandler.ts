import CleanStoryExtractCDS2C = proto.CleanStoryExtractCDS2C;
import Game from "../../Game";
var CleanStoryExtractCDS2CHandler = function(msg: CleanStoryExtractCDS2C)
{
    if (msg.error)
        return;
    Game.moduleModel.storyLottery.setProtoCleanCDDate( msg );
}

export {CleanStoryExtractCDS2CHandler}
