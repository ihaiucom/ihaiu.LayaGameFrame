import Game from '../../Game';
import GamerNotifyExpLevelS2C = proto.GamerNotifyExpLevelS2C;

var GamerNotifyExpLevelS2CHandler = function(msg: GamerNotifyExpLevelS2C)
{
    if(0 == msg.error) 
    {
        Game.user.levelSnapshot();
        Game.user.exp = msg.exp;
        Game.user.level = msg.level;
    }

}

export {GamerNotifyExpLevelS2CHandler}
