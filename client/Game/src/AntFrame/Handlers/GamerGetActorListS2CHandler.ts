import Game from '../../Game';
import GamerGetActorListS2C = proto.GamerGetActorListS2C;
var GamerGetActorListS2CHandler = function(msg: GamerGetActorListS2C)
{
    if(msg.error == 0) {
        Game.moduleModel.actor.maxCapacity = msg.maxActorNum;
        msg.actors.forEach(actor => {
            Game.moduleModel.actor.updateActor(actor);
        });
    }
}

export {GamerGetActorListS2CHandler}
