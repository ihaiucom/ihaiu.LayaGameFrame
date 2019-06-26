import StoryConfig from "../../Config/ConfigExtends/StoryConfig";
import Game from '../../Game';
import GameStringHelper from "../../GameHelpers/GameStringHelper";
import TEXT from '../../Config/Keys/TEXT';
import LabelType from '../../GameFrame/PropLabels/LabelType';
import StudioStoryType = proto.StudioStoryType;
import IStudioStory = proto.IStudioStory;

/** 拍摄--剧本 */
export default class StudioStoryData
{
	/** 剧本类型 （普通本、金本）*/
	storyType: StudioStoryType;
	/** 剧本系列id */
	storySeriesId: int;
	/** 剧本ID */
	storyId: int;
	/** 剧本名称 */
    storyName: string = "";
	/** 期待值 */
	expect: float = 0;
	/** 事件收集数量 */
	eventNum: int = 0;
	/** 剧本季数 */
	season: int = 0;
	/** 剧本期数 */
	episode: int = 0;
	

	/** 清理数据 */
	clear()
	{
		this.storyType = StudioStoryType.StudioStoryType_Normal;
		this.storySeriesId = 0;
		this.storyId = 0;
		this.storyName = "";
		this.expect = 0;
		this.eventNum = 0;
		this.season = 0;
		this.episode = 0;
	}

	/** 设置协议数据 */
	setProtoData(data: IStudioStory)
	{
		for(let key in data)
		{
			this[key] = data[key];
		}
	}

	/** 拷贝值 */
	copyValue(data: StudioStoryData)
	{
		this.storyType = data.storyType;
		this.storySeriesId = data.storySeriesId;
		this.storyId = data.storyId;
		this.storyName = data.storyName;
		this.expect = data.expect;
		this.eventNum = data.eventNum;
		this.season = data.season;
		this.episode = data.episode;
	}


	/** 剧本配置 */
	get storyConfig(): StoryConfig
	{
		return Game.config.story.getConfig(this.storyId);
	}
	/** 剧本星级 */
	get star(): int {
		let s = 0;
		if(this.storyConfig) {
			s = this.storyConfig.starNumber;
		}
		return s;
	}

	/** 获取随机名称 */
	randomName(exclude:string = null): string
	{
		let gameRandomNameConfig = Game.config.gameRandomName.getConfig(this.storyConfig.gameRandomNameId);

		if(!exclude)
			exclude = this.name;

		return gameRandomNameConfig.randomName(exclude);
	}
	/** 类型 */
	get typeString(): string 
	{
		let labelConfig =  this.storyConfig.labelList.get(LabelType.storyType);
		return labelConfig.name;
	}
	get typeIcon(): string 
	{
		let labelConfig =  Game.config.label.getConfig(this.storyConfig.label_storyType);
		let avatarConfig = Game.config.avatar.getConfig(labelConfig.icon);
		return avatarConfig.iconUrl;
	}
	/** 期待值类型--fairygui控制器使用 0 升 1降 */
	get expectType(): number {
		let num = 1;
		if(this.expect > 1) num = 0;
		return num;
	}

	/** 期待值默认说明(选择剧本期待值说明里第一句话)0:默认 1:高期待2:低期待 */
	get expectDefaultIntroduction(): string {
		let str = "";
		let num = 0;
		let conf = Game.config.studioEvaluation.getConfigByTypes(this.storyConfig.label_storyType, num);
		if(conf){
			str = conf.content;
		}
		return str;
	}
	/** 期待值说明 1:高期待2:低期待 */
	get expectIntroduction(): string {
		let str = "";
		let num = 2;
		if(this.expect > 1) num = 1;
		let conf = Game.config.studioEvaluation.getConfigByTypes(this.storyConfig.label_storyType, num);
		if(conf){
			str = conf.content;
		}
		return str;
	}

	/** 获取名称 */
	get name(): string
	{
		if(this.storyName && !isNullOrEmpty(this.storyName) )
		{
			return this.storyName;
		}
		else
		{
			if(!this.storyConfig) return "";
			return this.storyConfig.storyName;
		}
	}

	/** 获取全名 "《{0} 第{1}季》 第{3}期" */
	get storyNameAll(): string
	{
		return GameStringHelper.StoryNameAll(this.name,  this.season, this.episode, this.storyConfig.getEpisodeCount(this.season));
	}

	/** 获取 第{0}季 第{1}期 */
	get storySeasonEpisode(): string
	{
		return GameStringHelper.StorySeasonEpisode(this.season, this.episode, this.storyConfig.getEpisodeCount(this.season));
	}

	/** 获取 剧本简介 */
	get introduction(): string 
	{
		return this.storyConfig.introduction;
	}

	/** 海报图片 */
	get iconUrl(): string
	{
		return this.storyConfig.iconUrl;
	}

	/** 获取拍摄场景图片 */
	get scenePicUrl(): string
	{
		return 'res/fspriteassets/StoryScene/normal_01.png';
	}

	/** 获取最多 特殊事件数量 */
	get eventMax():int
	{
		return this.storyConfig.eventMax;
	}

	/** 特殊事件是否收集完成 */
	get isEventComplete(): boolean
	{
		return this.eventNum >= this.eventMax;
	}

	/** 事件收集情况 */
	get eventString(): string 
	{
		let str = "";
		if(this.isEventComplete) {
			str = TEXT.StudioEventAllCollected;
		}else {
			str = TEXT.StudioEventCollecting.format(this.eventNum, this.eventMax)
		}
		return str;
	}

	/** 获取消耗行动力 */
	get cost():int
	{
		return this.storyType == StudioStoryType.StudioStoryType_Normal ? this.storyConfig.cost : this.storyConfig.goldCost;
	}

}