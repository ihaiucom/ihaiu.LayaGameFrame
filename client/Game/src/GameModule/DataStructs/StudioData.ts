import StudioStoryData from "./StudioStoryData";
import StudioEventData from "./StudioEventData";
import StudioActorData from "./StudioActorData";
import StudioResultData from "./StudioResultData";
import { EItemId } from "../DataEnums/ItemType";
import StudioActorCellData from "./StudioActorCellData";
import Dictionary from "../../Libs/Helpers/Dictionary";
import PropLevelDataList from '../../GameFrame/Props/PropLevelDataList';
import Game from '../../Game';
import Prop from '../../GameFrame/Props/Prop';
import PropHelper from '../../GameFrame/Props/PropHelper';

import IStudioActor = proto.IStudioActor;
import Story = proto.Story;
import StudioStep = proto.StudioStep;
import StudioActorState = proto.StudioActorState;
import StudioEventType = proto.StudioEventType;

export default class StudioData
/** 拍摄--数据 */
{
    /** 步骤 */
    step: StudioStep = StudioStep.studioStepInvalid;
    
    /** 剧本 */
    story: StudioStoryData = new StudioStoryData();
    
    /** 艺人列表 */
    actors: StudioActorData[] = [];
    
    /** 事件 */
    event: StudioEventData = new StudioEventData();
    
    /** 结算 */
    result: StudioResultData = new StudioResultData();


    /** 艺人巢 */
    actorCells: StudioActorCellData[] = [];
    actorCellDict: Dictionary<int, StudioActorCellData> = new Dictionary<int, StudioActorCellData>();
    
    
    /** 清理数据 */
    clear()
    {
        this.step = StudioStep.studioStepInvalid;
        this.story.clear();
        this.actors.length = 0;
        this.event.clear();
        this.result.clear();
        this.actorCells.length = 0;
        this.actorCellDict.clear();
        this._scoreTotal = -1;
        this.clearActors();

    }

    /** 设置艺人协议数据 */
    setProtoActors(list: IStudioActor[])
    {
        this.clearActors();
        list.sort((a: IStudioActor, b: IStudioActor) =>  {
                return a.storyCharactersId - b.storyCharactersId;
        });
        for(let data of list)
        {
            let item = new StudioActorData();
            item.studioData = this;
            item.setProtoData(data);
            this.actors.push(item);
        }
    }

    clearActors() {
        this._scoreTotal = -1;
        this.actors.length = 0;
        this._actorsHelper.length = 0;
        this._actorsNormal.length = 0;
        this._actorsBestAndMvp.length = 0;
    }

    

    /** 获取艺人巢 */
    getActorCell(storyCharactersId:int): StudioActorCellData
    {
        return this.actorCellDict.getValue(storyCharactersId);
    }

    getActorCellIndex(storyCharactersId: int): number
    {
        let startIndex = 0;
        let actorCells = this.actorCells.slice();
        let startCell = this.getActorCell(storyCharactersId);
        if(!startCell)
            throw "StudioData.ts =>getNextId(startId): 错误的characterId";
        return actorCells.indexOf(startCell);
    }

    getNextActorCellIndex(startId: number = 0):number
    {
        let startIndex = 0;
        let nextIndex  = -1;
        let actorCells = this.actorCells.slice();
        if(startId > 0) 
        {
            let startCell = this.getActorCell(startId);
            if(!startCell)
                throw "StudioData.ts =>getNextId(startId): 错误的characterId";
            startIndex = actorCells.indexOf(startCell);
        }
        nextIndex = actorCells.findIndex((val,i)=>{
            if(startIndex <= i)
            {
                return val.actorId == 0;
            }
        })
        if(-1 == nextIndex)
        {
           nextIndex = actorCells.findIndex((val,i)=>{
               return val.actorId == 0;
            });
        }
        // if(-1 == nextIndex && startIndex > 0)
        // {
        //     nextIndex = startIndex;
        // }

        return nextIndex;
    }

    /** 生成艺人巢数据 -需要有剧本 */
    generateActorCell()
    {
        this.actorCells.length = 0;
        this.actorCellDict.clear();

        for(let characterConfig of this.story.storyConfig.characterConfigList)
        {
            let item = new StudioActorCellData();
            item.storyCharactersId = characterConfig.id;
            this.actorCells.push(item);
            this.actorCellDict.add(item.storyCharactersId, item);
        }

        for(let actor of this.actors)
        {
            let item = this.getActorCell(actor.storyCharacterId);
            item.actorId = actor.actorId;
            item.cost = actor.cost;
        }
    }





    /** 获取 行动力 物品ID */
    get costItemId():int
    {
        return EItemId.abilityPower;
    }

    /** 获取 消耗行动力 */
    get costTotal():int
    {
        let total = this.story.cost;
        for(let actor of this.actors)
        {
            total += actor.cost;
        }

        return total;
    }


    /** 获取 艺人换阵花费 物品ID */
    get actorChangeCostItemId():int
    {
        return EItemId.studioActorChangeCell;
    }

    /** 获取 艺人换阵花费 */
    get actorChangeCost(): int
    {
        let total = 0;
        for(let actor of this.actors)
        {
            total += actor.costChange;
        }

        return total;
    }


    private _actorCellAllProp:PropLevelDataList = new PropLevelDataList();
    /** 获取艺人槽以上阵总属性 */
    get actorCellAllProp(): PropLevelDataList
    {
        let list: PropLevelDataList = this._actorCellAllProp;
        list.clear();
        for(let cell of this.actorCells)
        {
            if(!cell.actorData)
                continue;
            
            list.addCurrentLevelList(cell.actorData.prop);

        }
        list.calculate();
        return list;
    }

    get allProps(): Prop[]
    {
        let props: Prop[] = [];
        let propsDict: Dictionary<number,number> = new Dictionary<number,number>();
        let pList = PropHelper.ActorPropIds;
        pList.forEach(propId=>{
            propsDict.add(propId,0);
        })
        this.actors.forEach(actor=>{
            actor.scoreProps.forEach(prop=>{
                let v = propsDict.getValue(prop.id);
                if(!v) v = 0;
                v += prop.val;
                propsDict.add(prop.id, v);
            });
        });
        propsDict.getKeys().forEach(propId => {
            props.push(Prop.Create(propId, propsDict.getValue(propId)));
        });
        return props;
       
    }

    /** 期待值说明 */
    get expectIntroduction(): string {
        let str = "";
        let strArr = [];
        let typeArr: string[] = [];
        let storys = Game.moduleModel.studio.storys;
        for (let index = 0; index < storys.length; index++) {
            const story = storys[index];
            if(index == 0) {
                strArr.push(story.expectDefaultIntroduction);
            }
            let type = story.typeString;
            if(typeArr.indexOf(type) == -1) {
                typeArr.push(type);
                let intro = story.expectIntroduction;
                if(strArr.indexOf(intro) == -1) {
                    strArr.push(intro);
                }
            }
        }
        str = strArr.join('') +"。";
        return str;
    }
    
    /** 事件图标 */
    get eventIconUrl(): string 
    {
        switch(this.event.eventType)
        {
            // 特殊
            case StudioEventType.storyCharactersBest:
                return this.story.iconUrl;
            // 艺人
            case StudioEventType.storyActor:
                let actor = Game.moduleModel.actor.getActor(this.event.eventActorId);
                if(actor)
                    return actor.halfIcon;
                return  "";
            // 娱乐、其他
            default:
                if(this.event.eventConfig)
                {
                    let avatarConfig = Game.config.avatar.getConfig(this.event.eventConfig.avatar);
                    if(avatarConfig)
                    {
                        return avatarConfig.iconUrl;
                    }
                }
                
                return "";
            
        }
    }



    private _actorsHelper: StudioActorData[] = [];
    private _actorsNormal: StudioActorData[] = [];
    private _actorsBestAndMvp: StudioActorData[] = [];
    /** 获取助阵艺人列表 */
    getActorsHelper(): StudioActorData[]
    {
        if(this._actorsHelper.length == 0)
        {
            for(let actor of this.actors)
            {
                if(actor.actorState == StudioActorState.help && !actor.isMvp)
                {
                    this._actorsHelper.push(actor);
                }
            }
        }
        return this._actorsHelper;
    }

    
    /** 获取普通艺人列表 */
    getActorsNormal(): StudioActorData[]
    {
        if(this._actorsNormal.length == 0)
        {
            for(let actor of this.actors)
            {
                if((actor.actorState == StudioActorState.normal || actor.actorState == StudioActorState.ActorStateInvalid) && !actor.isMvp)
                {
                    this._actorsNormal.push(actor);
                }
            }
        }
        return this._actorsNormal;
    }

    
    /** 获取匹配和mvp艺人列表 */
    getActorsBestAndMvp(): StudioActorData[]
    {
        if(this._actorsBestAndMvp.length == 0)
        {
            for(let actor of this.actors)
            {
                if(actor.actorState == StudioActorState.best || actor.isMvp)
                {
                    this._actorsBestAndMvp.push(actor);
                }
            }

            if( this._actorsBestAndMvp.length > 1)
            {
                this._actorsBestAndMvp.sort((a, b)=>
                {
                    return a.isMvp ? 1 : -1;
                });
            }
        }
        return this._actorsBestAndMvp;
    }

    /** 获取总分数 */
    private _scoreTotal = -1;
    get scoreTotal(): number
    {
        if(this._scoreTotal <= 0)
        {
            let result = 0;
            for(let item of this.actors)
            {
                result += item.scoreTotal;
            }

            this._scoreTotal = result;
        }
        return this._scoreTotal;
    }



}