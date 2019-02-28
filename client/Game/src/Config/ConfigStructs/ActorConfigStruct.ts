/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTActorSkill from "../ConfigExtends/DTActorSkill";
import DTActorStory from "../ConfigExtends/DTActorStory";
import DTActorFeature from "../ConfigExtends/DTActorFeature";
import DTActorCharacter from "../ConfigExtends/DTActorCharacter";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class ActorConfigStruct extends BaseConfig
{


	id : number;
	en_name : string;
	cn_name : string;
	random_name : number;
	star : number;
	sex : number;
	country : number;
	show_type : number;
	age_type : number;
	avatar : number;
	spectacle : number;
	perform : number;
	plot : number;
	art : number;
	entertainment : number;
	main_id : number;
	skill : DTActorSkill[];
	story_type : DTActorStory[];
	story_feature : DTActorFeature[];
	character : DTActorCharacter[];
	surprise : number;
	cost : DTItemNum;
	recruit_reward : DTItemNum[];
	enable_cost : DTItemNum;
	random_value : number;
	exp : number;
	paycheck : number;
	stamina : number;
	culture : number;
	assets : number;
	en_tips : string;
	cn_tips : string;
	en_getway : string;
	cn_getway : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_name

		let value = <string> Game.lang.getValue("actor", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_name
	}
	get tips():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_tips

		let value = <string> Game.lang.getValue("actor", this.id, "tips");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_tips
	}
	get getway():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_getway

		let value = <string> Game.lang.getValue("actor", this.id, "getway");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_getway
	}

}