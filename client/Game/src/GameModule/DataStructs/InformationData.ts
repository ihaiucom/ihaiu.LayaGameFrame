import Game from "../../Game";
import LabelConfig from "../../Config/ConfigExtends/LabelConfig";
import Random from '../../Libs/Helpers/Random';
import LabelType from '../../GameFrame/PropLabels/LabelType';
import IntelligenceState = proto.IntelligenceState;

export default class InformationData
{
    private _config: LabelConfig;

    /**
     * 情报配置
     */
    get config(): LabelConfig {
        if(!this._config)
        {
            this._config = Game.config.label.getConfig(this.id);;
        }
        return this._config;
    }

    // 情报ID
    id: number;
    
    // 情报类型
    type: number = 0;

    // 情报数量
    count:number = 0;

    obtainTime: number = 0;
    name: string = "";
    /**0:未读 1:已读*/
    state: IntelligenceState = IntelligenceState.Unread;


    setProtoData(data: any)
    {
        for(let key in data)
        {
            this[key] = data[key];
        }
        if(!this.type)
            this.type = this.config.type;
    }

    get isSpecial(): boolean
    {
        if(this.config)
            return this.config.type == LabelType.specialIntelligence;
        return false;
    }

    static Create(msg: any): InformationData {
        let informationData  = new InformationData();
        informationData.id   = msg.id;
        informationData.count= msg.count;
        informationData.type = informationData.config.type;

        return informationData;
    }

    static get testData(): InformationData
    {
        let informationData  = new InformationData();
        informationData.id   = this.__randomId;
        informationData.count= Random.range(1, 99);
        informationData.type = informationData.config.type;

        return informationData;
    }

    private static get __randomId(): number
    {
        let id = Random.range(28, 32) * 100 + Random.range(1,10);
        return id;
    }
}