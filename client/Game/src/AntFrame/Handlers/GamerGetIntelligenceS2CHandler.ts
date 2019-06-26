import Game from '../../Game';
import GamerGetIntelligenceS2C = proto.GamerGetIntelligenceS2C;
import InformationModel from '../../GameModule/DataModels/InformationModel';
var GamerGetIntelligenceS2CHandler = function(msg: GamerGetIntelligenceS2C)
{
    if (msg.error)
        return;

    let informationmodel: InformationModel = Game.moduleModel.information;

    let infos: Array<any> = msg.intelligences;
    informationmodel.setProtoListData(infos);
}

export {GamerGetIntelligenceS2CHandler}
