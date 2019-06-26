import Game from "../../Game";
import ServerTimeS2C = proto.ServerTimeS2C;

var ServerTimeS2CHandler = function(msg: ServerTimeS2C)
{
    if(msg.error) return;
    if(!msg.time) return;

    // console.log("ServerTimeS2CHandler msg.time：");
    // console.info(msg.time);

    Game.time.settingServerTime(msg.time.timestamp, msg.time.timezone);
}

export {ServerTimeS2CHandler}
