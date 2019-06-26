import Game from '../../Game';
import GamerNotifyIntelligenceS2C = proto.GamerNotifyIntelligenceS2C;
import InformationModel from '../../GameModule/DataModels/InformationModel';

var GamerNotifyIntelligenceS2CHandler = function(msg: GamerNotifyIntelligenceS2C)
{
    if (msg.error)
        return;

    let informationmodel: InformationModel = Game.moduleModel.information;

    let infos: Array<any> = msg.intelligences;
    informationmodel.updateProtoListData(infos);
}

export {GamerNotifyIntelligenceS2CHandler}
