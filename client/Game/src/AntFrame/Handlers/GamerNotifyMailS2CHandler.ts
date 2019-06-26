import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
import GamerNotifyMailS2C = proto.GamerNotifyMailS2C;

var GamerNotifyMailS2CHandler = function(msg: GamerNotifyMailS2C)
{
    if (msg.error)
        return;

    let mails: Array<any> = msg.mails;
    Game.moduleModel.mail.setMailList(mails);
    Game.event.dispatch(GameEventKey.Mail_Update);
}

export {GamerNotifyMailS2CHandler}
