/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class StoryConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_storyName : string;
	storySeriesId : number;
	season : number;
	episode : number;
	preconditionStory : number;
	label_star : number;
	label_storyType : number;
	storyRate : number;
	storyStackSortId : number;
	storyEventId : number[];
	gameRandomNameId : number;
	storyCharacterId : number[];
	zh_cn_introduction : string;
	posterName : number;
	sceneName : number;
	cost : number;
	goldCost : number;
	rewardId : number[];
	firstRewardProps : string[];
	continuedRewardProps : string[];





	
	get storyName():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_storyName

		let value = <string> Game.lang.getValue("story", this.id, "storyName");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_storyName
	}
	get introduction():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_introduction

		let value = <string> Game.lang.getValue("story", this.id, "introduction");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_introduction
	}

}