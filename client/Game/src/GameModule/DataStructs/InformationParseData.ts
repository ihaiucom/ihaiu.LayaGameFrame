import ItemData from './ItemData';
import InformationData from './InformationData';
import Game from '../../Game';
import IntelligencePaseResultType = proto.IntelligencePaseResultType;
import GamerIntelligenceParseS2C = proto.GamerIntelligenceParseS2C;
import IntelligencePaseType = proto.IntelligencePaseType;
import Res from '../../Config/Keys/Res';
import R from '../../Config/Keys/R';


export default class InformationParseData
{

    public type: IntelligencePaseResultType = IntelligencePaseResultType.IntelligencePaseResultType_Actor;
	
    public actorId: number = 0;

    public items: ItemData[] = [];

    public notMatchIntelligencesId: number[] = [];

    public informations: InformationData[] = [];
    public infoType: IntelligencePaseType = IntelligencePaseType.IntelligencePaseType_Normal;
    
    constructor(infos:number[], infoType: IntelligencePaseType)
    {
        for(let id of infos)
        {
            let data = Game.moduleModel.information.getInformationData(id);
            if(data)
                this.informations.push(data);
        }
        this.infoType = infoType;
    }
    
    setProtoData(msg:GamerIntelligenceParseS2C)
    {
        this.clear();
        this.type = msg.type;
        this.actorId = msg.actorId;
        this.notMatchIntelligencesId = msg.notMatchIntelligencesId;
        for(let item of msg.items)
        {
            let itemData = new ItemData();
            itemData.setProtoData(item);
            this.items.push(itemData);
        }
    }
    
    get actorIcon(): string
    {
        if(Game.moduleModel.information.isTest)
        {
            return Res.getActorBodyIcon(R.actorIcon.DiLiReBa);
        }
        else
        {
            let url = "";
            if(this.actorId)
            {
                let config = Game.config.actor.getConfig(this.actorId);
                config && (url = config.bodyIconUrl);
            }
            return url;
        }
    }

    clear()
    {
        this.type = IntelligencePaseResultType.IntelligencePaseResultType_Actor;
        this.actorId = 0;
        this.items.length = 0;
        this.notMatchIntelligencesId.length = 0;
    }


}