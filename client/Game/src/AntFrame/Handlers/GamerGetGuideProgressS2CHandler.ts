import GamerGetGuideProgressS2C = proto.GamerGetGuideProgressS2C;
import Game from "../../Game";
var GamerGetGuideProgressS2CHandler = function(msg: GamerGetGuideProgressS2C)
{
    if (msg.error)
        return;
    Game.moduleModel.guide.setProgress( msg.progress );
}

export {GamerGetGuideProgressS2CHandler}
