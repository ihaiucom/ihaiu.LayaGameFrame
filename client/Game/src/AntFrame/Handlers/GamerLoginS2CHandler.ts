import Game from "../../Game";
import GamerLoginS2C = proto.GamerLoginS2C;
var GamerLoginS2CHandler = function(msg: GamerLoginS2C)
{
    if(msg.error)
        return;
    Game.user.setGamerMain(msg.main);
}

export {GamerLoginS2CHandler}
