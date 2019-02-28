/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class StoryCharactersConfigStruct extends BaseConfig
{


	id : number;
	story_id : number;
	character_num : number;
	zh_cn_name : string;
	type : number;
	type_pic : number;
	sex : number;
	country : number;
	show_type : number;
	age_type : number;
	tags : number[];
	effect : number[];
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