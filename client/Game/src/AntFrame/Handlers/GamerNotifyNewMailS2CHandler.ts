import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
import GamerNotifyNewMailS2C = proto.GamerNotifyNewMailS2C;

var GamerNotifyNewMailS2CHandler = function(msg: GamerNotifyNewMailS2C)
{
    if (msg.error)
        return;

    let mails: Array<any> = msg.mails;
    Game.moduleModel.mail.setMailList(mails);
    Game.event.dispatch(GameEventKey.Mail_Update);
}

export {GamerNotifyNewMailS2CHandler}
