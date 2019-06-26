import ActorModel from "../../GameModule/DataModels/ActorModel";
import Game from "../../Game";
import TEXT from "../../Config/Keys/TEXT";
import GamerActorUpLevelS2C = proto.GamerActorUpLevelS2C;
var GamerActorUpLevelS2CHandler = function(msg: GamerActorUpLevelS2C)
{
    if (msg.error)
        return;   
    
    Game.system.toastText(TEXT.ActorLevelUpSuccess);
}

export {GamerActorUpLevelS2CHandler}
