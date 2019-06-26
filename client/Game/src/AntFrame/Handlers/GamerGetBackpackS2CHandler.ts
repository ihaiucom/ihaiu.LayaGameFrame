import Game from "../../Game";
import GamerGetBackpackS2C = proto.GamerGetBackpackS2C;
var GamerGetBackpackS2CHandler = function(msg: GamerGetBackpackS2C)
{
    let items =  msg.items;
    console.log("========================s2c itemlist: ", msg);
    
    items.forEach(item => {
        Game.moduleModel.item.setItemNum(item.id, item.count,item.obtainTime);
    });
}

export {GamerGetBackpackS2CHandler}
