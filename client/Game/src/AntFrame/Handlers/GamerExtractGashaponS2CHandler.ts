import GamerExtractGashaponS2C = proto.GamerExtractGashaponS2C;
import Game from "../../Game";
import { MenuId } from "../../GameModule/MenuId";
import GashaponModel from "../../GameModule/DataModels/GashaponModel";
var GamerExtractGashaponS2CHandler = function(msg: GamerExtractGashaponS2C)
{
    if (msg.error)
        return;
    
    // let menuId: number = Game.config.gashapon.getConfig(msg.gashaponId).menu;
    // switch (menuId) {
    //     case MenuId.Information:
    //         // Game.system.informationGetShow(msg.items);
    //         break;
    //     default:
    //         break;
    // }
}

export {GamerExtractGashaponS2CHandler}
