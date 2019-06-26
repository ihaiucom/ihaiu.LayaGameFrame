import Game from '../../Game';

import GamerNotifyActorChangeS2C = proto.GamerNotifyActorChangeS2C;
var GamerNotifyActorChangeS2CHandler = function(msg: GamerNotifyActorChangeS2C)
{
    console.log("GamerNotifyActorChangeS2CHandler",msg);
    
    if(msg.error == 0) {
        Game.moduleModel.actor.updateActor(msg.actor);
    }

}

export {GamerNotifyActorChangeS2CHandler}
