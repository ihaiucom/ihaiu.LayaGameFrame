import GamerNotifyTaskS2C = proto.GamerNotifyTaskS2C;
import Game from "../../Game";
import TaskType = proto.TaskType;

var GamerNotifyTaskS2CHandler = function(msg: GamerNotifyTaskS2C)
{
    if (msg.error)
        return;

    for ( let data of msg.tasks )
    {
        switch ( data.type )
        {
            case TaskType.MainTask:
                Game.moduleModel.mainTask.setData( data );
                break;
        }
    }
}

export {GamerNotifyTaskS2CHandler}
