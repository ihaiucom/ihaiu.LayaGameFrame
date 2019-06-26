import PurchaseStoryExtractNumS2C = proto.PurchaseStoryExtractNumS2C;
import Game from "../../Game";
var PurchaseStoryExtractNumS2CHandler = function(msg: PurchaseStoryExtractNumS2C)
{
    if (msg.error)
        return;
    Game.moduleModel.storyLottery.setProtoBuyNumDate( msg );
}

export {PurchaseStoryExtractNumS2CHandler}
