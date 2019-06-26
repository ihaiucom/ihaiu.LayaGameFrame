import Prop from "../../GameFrame/Props/Prop";
import LabelConfig from "../../Config/ConfigExtends/LabelConfig";
import ActorConfig from "../../Config/ConfigExtends/ActorConfig";
import Game from "../../Game";
import ActorData from "./ActorData";
import GlobalConfig from '../../Config/ConfigExtends/GlobalConfig';
import GlobalKey from '../../Config/Keys/GlobalKey';
import ActorStarConfig from "../../Config/ConfigExtends/ActorStarConfig";
import ActorId from '../DataEnums/ActorId';
import IStudioActor = proto.IStudioActor;
import StudioData from "./StudioData";
import StudioActorState = proto.StudioActorState;
import PropHelper from "../../GameFrame/Props/PropHelper";

/** 拍摄--艺人 */
export default class StudioActorData
{
    studioData: StudioData;
    /** 艺人槽位ID */
	storyCharacterId:int;   
    /** 艺人ID */
	actorId:int;   
    /** 消耗行动力 */
	cost:int = 0;   
    /** 改变上阵消耗 */
	costChange:int = 0;   
    /** 艺人状态 （普通、助阵、最匹配） */
	actorState:StudioActorState;   
    /** 是否是MVP */
	isMvp:boolean = false;   
    /** 标签列表--剧本和艺人匹配 */
    matchingLabels:int[] = [];
    /** 属性列表--场内(剧本和艺人匹配) */
    matchingProps:Prop[] = [];
    /** 属性列表--拍摄得分（随机） */
    scoreProps:Prop[] = [];
    /** 技能列表: 技能ID、技能得分 */
    skills:StudioActorSkillData[] = [];
    /** 普通总分: scoreProps所有值之和， 不包含技能 */
    normalScoreTotal:int = 0;  
    
    /** 设置协议数据 */
    setProtoData(data: IStudioActor)
    {
        this.storyCharacterId = data.storyCharactersId;
        this.actorId = data.actorId;
        this.cost = data.cost;
        this.actorState =  <StudioActorState><number>data.actorState;
        this.isMvp = data.isMvp;
        this.normalScoreTotal = data.normalScoreTotal;

        this.matchingLabels.length = 0;
        this.matchingProps.length = 0;
        this.scoreProps.length = 0;
        this.skills.length = 0;

        this._scorePropTotal = -1;
        this._scoreTotal = -1;

        if(data.matchingLabels && data.matchingLabels.length > 0)
        {
            for(let item of data.matchingLabels)
            {
                this.matchingLabels.push(item);
            }
        }

        
        if(data.matchingProps && data.matchingProps.length > 0)
        {
            for(let item of data.matchingProps)
            {
                let val = item.propVal;
                if(!item.propVal) val = 0;
                this.matchingProps.push(Prop.Create(item.propId, val));
            }
            this.matchingProps.sort((a,b)=>{
                return a.id > b.id ?1:-1;
            });
        }
        
        if(data.scoreProps && data.scoreProps.length > 0)
        {
            for(let item of data.scoreProps)
            {
                this.scoreProps.push(Prop.Create(item.propId, item.propVal));
            }
        }
        
        if(data.skills && data.skills.length > 0)
        {
            for(let item of data.skills)
            {
                let skillData = new StudioActorSkillData();
                skillData.skillId = item.skillId;
                skillData.score = item.effectValue;
                this.skills.push(skillData);
            }
        }
    }

    /** 艺人数据 */
    get actorData(): ActorData
    {
        if(this.actorId == ActorId.Temp_Man || this.actorId == ActorId.Temp_Woman)
        {
            let cell = this.studioData.getActorCell(this.storyCharacterId);
            if(cell)
            {
                return cell.actorData;
            }
        }
        return Game.moduleModel.actor.getActor(this.actorId);
    }

    /** 艺人配置 */
    get actorConfig(): ActorConfig
    {
        return Game.config.actor.getConfig(this.actorId);
    }

    /** 艺人 名称 */
    get name():string
    {
        if(this.actorData)
        {
            return this.actorData.name;
        }
        return this.actorConfig.name;
    }

    /** 艺人 全身像 */
    get bodyIconUrl(): string
    {
        if(this.actorData)
        {
            return this.actorData.bodyIcon;
        }
        return this.actorConfig.bodyIconUrl;
    }
    
    public get headIconUrl(): string {
        
        if(this.actorData)
        {
            return this.actorData.headIcon;
        }
        return this.actorConfig.iconUrl;
    }

    /** 获取属性分数 */
    private _scorePropTotal = -1;
    get scorePropTotal(): number
    {
        if(this._scorePropTotal <= 0)
        {
            let result = 0;
            for(let item of this.scoreProps)
            {
                result += item.val;
            }

            this._scorePropTotal = result;

        }
        return this._scorePropTotal;
    }

    /** 获取总分数 */
    private _scoreTotal = -1;
    get scoreTotal(): number
    {
        if(this._scoreTotal <= 0)
        {
            let result = 0;
            for(let item of this.skills)
            {
                result += item.score;
            }
            
            result += this.scorePropTotal;

            this._scoreTotal = result;

        }
        return this._scoreTotal;

    }

    /** 匹配标签 */
    public get matchedTagCongfigs(): LabelConfig[] {
        // let that = this;    
        // let storyTags = [];
        // let characterConfig =Game.config.storyCharacters.getConfig(this.storyCharacterId);
        // if(characterConfig) {
        //     storyTags = characterConfig.label_storyTag;
        // }
        // let mTagIds = storyTags.filter((n) => {
        //     return that.matchingLabels.indexOf(n) != -1
        // });
        // console.log("***mTags = ", mTagIds);
        let mtags = [];
        for(let tagId of this.matchingLabels) {
            let lbConfig = Game.config.label.getConfig(tagId);
            mtags.push(lbConfig);
        }
        return mtags;
    }


}


export class StudioActorSkillData
{
    /** 技能ID */
	skillId:int;   
    /** 技能得分 */
    score:int;   
    
    get name(): string
    {
        return "技能" + this.skillId;
    }
}