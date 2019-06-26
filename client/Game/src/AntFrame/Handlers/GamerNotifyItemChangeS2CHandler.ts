
import Game from "../../Game";
import Random from '../../Libs/Helpers/Random';

var GamerNotifyItemChangeS2CHandler = function(msg: proto.GamerNotifyItemChangeS2C)
{
    if(0 == msg.error) {
        let items =  msg.itemsChange;
        items.forEach(item => {
            Game.moduleModel.item.setItemNum(item.id, item.count, item.obtainTime);
        });
    }
}

export {GamerNotifyItemChangeS2CHandler}
