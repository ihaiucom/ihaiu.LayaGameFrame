import Game from "../../Game";
import GamerNotifyItemS2C = proto.GamerNotifyItemS2C;

var GamerNotifyItemS2CHandler = function(msg: GamerNotifyItemS2C)
{
    if(0 == msg.error) {
        let item = msg.item;
        if(item)
            Game.moduleModel.item.setItemNum(item.id, item.count, item.obtainTime);
    }
    
}

export {GamerNotifyItemS2CHandler}
