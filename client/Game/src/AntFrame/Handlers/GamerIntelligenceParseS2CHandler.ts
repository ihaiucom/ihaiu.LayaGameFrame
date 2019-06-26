import Game from '../../Game';
import GamerIntelligenceParseS2C = proto.GamerIntelligenceParseS2C;
var GamerIntelligenceParseS2CHandler = function(msg: GamerIntelligenceParseS2C)
{
    if (msg.error == 0)
    {
        Game.moduleModel.information.setParseData(msg);
    }
}

export {GamerIntelligenceParseS2CHandler}
