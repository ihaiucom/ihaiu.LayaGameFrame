/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTFixItemNum from "../ConfigExtends/DTFixItemNum";
import Game from "../../Game";



export default class StoryCharactersConfigStruct extends BaseConfig
{


	id : number;
	storyId : number;
	zh_cn_name : string;
	label_sex : number;
	label_country : number;
	label_showType : number;
	label_ageType : number;
	storyPositionId : number;
	label_storyTag : number[];
	randomPropId : number[];
	storyEventId : number[];
	characterNum : number;
	typePic : number;
	bestActor : number;
	costItem : DTFixItemNum[];
	zh_cn_introduction : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("storyCharacters", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get introduction():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_introduction

		let value = <string> Game.lang.getValue("storyCharacters", this.id, "introduction");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_introduction
	}

}