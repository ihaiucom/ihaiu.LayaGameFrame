import Game from "../../Game";
import GamerLoginGetDataS2C = proto.GamerLoginGetDataS2C;
var GamerLoginGetDataS2CHandler = function(msg: GamerLoginGetDataS2C)
{
    if(msg.error)
        return;
        
    console.log("GamerLoginGetDataS2CHandler msg.time：");
    console.info(msg.time);

    Game.time.settingServerTime(msg.time.timestamp, msg.time.timezone);
}

export {GamerLoginGetDataS2CHandler}
