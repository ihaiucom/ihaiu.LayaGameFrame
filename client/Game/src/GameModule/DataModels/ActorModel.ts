import MModel from '../../GameFrame/Module/MModel';
import Dictionary from '../../Libs/Helpers/Dictionary';
import ActorData from '../DataStructs/ActorData';
import ActorId from '../DataEnums/ActorId';
import TypedSignal from '../../Libs/signals/TypedSignal';
import Game from '../../Game';
import LabelValue from '../../GameFrame/PropLabels/LabelValue';
export default class ActorModel extends MModel {

    public actorList: ActorData[] = null;
    public dict: Dictionary<number, ActorData> = null;
    sAdd = new TypedSignal<ActorData>();

    constructor() {
        super();
        this.actorList = new Array<ActorData>();
        this.dict = new Dictionary<number, ActorData>();
    }

    private _maxCapacity: number = 0;
    public get maxCapacity(): number {
        return this._maxCapacity;
    }
    public set maxCapacity(v: number) {
        this._maxCapacity = v;
    }

    // 临时艺人
    private _tempActoDict: Dictionary<int, ActorData> = new  Dictionary<int, ActorData>();
    private _tempActorData: ActorData;
    getTempActor(sexLabel: int = LabelValue.sex_man)
    {
        let item = this._tempActoDict.getValue(sexLabel);
        if(!item)
        {
            let actorId = ActorId.Temp_Man;
            let avatarId = 6046;
            switch(sexLabel)
            {
                case LabelValue.sex_lady:
                    {
                        avatarId = 6046;
                        actorId = ActorId.Temp_Woman;
                    }
                    break;
                case LabelValue.sex_man:
                    avatarId = 6047;
                    break;
            }
            item = new ActorData(actorId,1,1301, null);
            item.avatarConfig = Game.config.avatar.getConfig(avatarId);
            this._tempActoDict.add(sexLabel, item);
        }
        
        return item;
    }

    createActor(id: number, level: number, levelmax:number, star: number,name:string, exp: number, buildId: number, propertys: any) {
        let data = new ActorData(id,level,levelmax,star, name);
        data.exp = exp;
        data.bulidId = buildId;
        data.propertyList = propertys;
        this.dict.add(id, data);
        this.actorList.push(data);
        this.sAdd.dispatch(data);
    }

    getActor(id: number): ActorData {
        if(id == ActorId.Temp_Man)
            return this.getTempActor(LabelValue.sex_man);
        if(id == ActorId.Temp_Woman)
            return this.getTempActor(LabelValue.sex_lady);
        return this.dict.getValue(id);
    }

    updateActor(actor: any) {
        if(this.dict.hasKey(actor.id)) {
            let data = this.dict.getValue(actor.id);
            data.level = actor.level;
            data.levelMax = actor.levelMax
            data.star = actor.star;
            data.name = actor.name;
            data.exp = actor.exp;
            data.bulidId = actor.bulidId;
            data.propertyList = actor.propertys;
        }else {
            this.createActor(actor.id, actor.level, actor.levelMax, actor.star, actor.name, actor.exp, actor.bulidId, actor.propertys);

        }
    }

     /**
     * 
     * 获取匹配的艺人
     * @param sortPropId 排序指定属性， 0表示等级排序
     */
    getMatchingActors(sortPropId)
    {
        let list: ActorData[] = this.actorList;

        //艺人排序
        if (sortPropId == 0) {
            list.sort(function (a: ActorData, b:ActorData):number {
                if (a.level == b.level) {
                    return b.id - a.id;
                } 
                return b.level - a.level;
            });
        } else if (sortPropId == 1) {
            list.sort(function (a: ActorData, b:ActorData):number {
                if (a.level == b.level) {
                    return b.id - a.id;
                } 
                return b.level - a.level;
            });
        } else {
            list.sort(function (a: ActorData, b:ActorData):number {
                if (a.prop.getVal(sortPropId) == b.prop.getVal(sortPropId)) {
                    if (a.level == b.level) {
                        return b.id - a.id;
                    }
                    return b.level - a.level;
                } 
                return b.prop.getVal(sortPropId) - a.prop.getVal(sortPropId);
            });
        }

        return list;
    }
}