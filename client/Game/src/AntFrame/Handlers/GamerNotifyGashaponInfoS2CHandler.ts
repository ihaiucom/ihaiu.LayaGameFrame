import GamerNotifyGashaponInfoS2C = proto.GamerNotifyGashaponInfoS2C;
import GashaponModel from "../../GameModule/DataModels/GashaponModel";
import Game from "../../Game";
var GamerNotifyGashaponInfoS2CHandler = function(msg: GamerNotifyGashaponInfoS2C)
{
    if (msg.error)
        return;

    let gashaponmodel: GashaponModel = Game.moduleModel.gashapon;

    let infos: Array<any> = msg.infos;
    gashaponmodel.setGashaponList(infos);
}

export {GamerNotifyGashaponInfoS2CHandler}
