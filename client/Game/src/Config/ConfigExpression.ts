import Game from "../Game";
import ActorData from '../GameModule/DataStructs/ActorData';
import PropHelper from '../GameFrame/Props/PropHelper';
import Prop from '../GameFrame/Props/Prop';
import PropId from '../GameFrame/Props/PropId';
import { PropType } from "../GameFrame/Props/PropType";
import ActorLevelStarConfig from './ConfigExpressions/ActorLevelStarConfig';
import ConfigIdHelper from "./ConfigIdHelper";
import StoryConfig from "./ConfigExtends/StoryConfig";
import Dictionary from "../Libs/Helpers/Dictionary";
import PropList from "../GameFrame/Props/PropList";
import Label from "../GameFrame/PropLabels/Label";
import LabelType from "../GameFrame/PropLabels/LabelType";
import LabelList from "../GameFrame/PropLabels/LabelList";
import DTActorStory from "./ConfigExtends/DTActorStory";
import Actor = proto.Actor;


export default class ConfigExpression
{

	// 获取艺人等级配置文件
	getActorLevelConfig(actorId: int, level:int,  starLevel: int)
	{
        let starLevelId = ConfigIdHelper.getActorLevelStarId(actorId, level, starLevel);
		// 艺人等级星级配置
		let actorLevelStarConfig = new ActorLevelStarConfig();
		actorLevelStarConfig.id = starLevelId;
		// 艺人配置
		let actorConfig = Game.config.actor.getConfig(actorId);
		for(let item of actorConfig.propList.list)
		{
			let prop = Prop.Create(item.id, 0, PropType.Add);
			prop.val = this.getActorLevelProp(item.id, actorId, level, starLevel);
			if(isNaNOrEmpty(prop.val))
			{
				console.log(`ConfigExpression getActorLevelConfig  ${ prop.name}  prop.id=${ prop.id}, prop.val = ${prop.val}` );
			}
			actorLevelStarConfig.propList.add(prop);
		}

		return actorLevelStarConfig;
	}

	/**
	 * 获取艺人等级属性
	 * @param propId    属性ID
	 * @param actorId   艺人ID
	 * @param level 	艺人等级
	 * @param starLevel 艺人星级
	 */
	getActorLevelProp(propId:int, actorId: int, level:int,  starLevel: int)
	{
		if(propId == PropId.eloquence)
		{
			console.log(1);
		}
		let propField = PropHelper.GetPropField(propId);
		// 艺人配置
		let actorConfig = Game.config.actor.getConfig(actorId);
		let baseProp = actorConfig.propList.get(propId);
		// 基础属性值
		let basePropVal = baseProp ? baseProp.val : 0;
		// 星级成长系数（艺人配置 Actor.xlsx xxxGrowRate）
		let growRate: float[] = actorConfig[`${propField}GrowRate`];

		if(growRate.length == 1) {
			return 0;
		}

		// 艺人星级配置
		let actorStarConfig = Game.config.actorStar.getConfig(starLevel);
		// 艺人星级系数
		let  starVal = actorConfig.mainPropertyField == propField ? actorStarConfig.main : actorStarConfig.second;

		let parC = 6.5;
		let parD = 0.002;
		let parE = 0.265;
		let growRateVal = growRate && growRate.length > starLevel - 1 ? growRate[starLevel - 1] : 0;
		if(isNaNOrEmpty(growRateVal)) growRateVal = 0;

		let result = Math.ceil((growRateVal / parC - parD)    *   (level - 1) * (level - 1)    + starVal * parE * (level - 1) + basePropVal);
		return result;
	}


	// 拍摄--剧本人物位置--属性加成
	getStoryAddProp(storyId:int, actorDict: Dictionary<int, any>)
	{



		let storyConfig: StoryConfig = Game.config.story.getConfig(storyId);
		for(let storyCharacterId of storyConfig.storyCharacterId)
		{
			let storyCharacterConfig = Game.config.storyCharacters.getConfig(storyCharacterId);
			let actor :any= actorDict.getValue(storyCharacterConfig.id);
			let actorBaseProps: PropList = actor.propList;
			let actorLabelList: LabelList = actor.labelList;

			
			// 剧本风格 LabelType.storyType
			let actorStorys: DTActorStory[];
			let storyLabels:int[] = storyConfig.labelList.getVals(LabelType.storyType);
			// 获取匹配的列表
			// 获取匹配的加成 sum(Game.config.labelLevel) 
			


			// 剧本属性 LabelType.storyFeature
			// 角色类型 LabelType.role


			// 剧本风格
			storyConfig.labelList.getVal(LabelType.storyType);

			// 剧本加成
			let actorLabel = actorLabelList.getVal(LabelType.storyType)


		}
	}
}