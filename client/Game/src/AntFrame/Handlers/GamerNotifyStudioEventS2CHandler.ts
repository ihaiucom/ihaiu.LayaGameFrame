import Game from '../../Game';
import GamerNotifyStudioEventS2C = proto.GamerNotifyStudioEventS2C;
import StudioStep = proto.StudioStep;
import StudioEventType = proto.StudioEventType;

var GamerNotifyStudioEventS2CHandler = function(msg: GamerNotifyStudioEventS2C)
{
    let result = msg.error == 0;
    if(result)
    {
        if(msg.eventId) {
            Game.moduleModel.studio.setEventData(msg.eventId, msg.eventType);
            Game.moduleModel.studio.setStep(StudioStep.selectEventOption);
        }else {
            Game.moduleModel.studio.setStep(StudioStep.studio);
        }
    }
}

export {GamerNotifyStudioEventS2CHandler}
