/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class SkillConfigStruct extends BaseConfig
{


	id : number;
	group_id : number;
	lv : number;
	exp : number;
	en_name : string;
	cn_name : string;
	en_tips : string;
	cn_tips : string;
	en_effecttext : string;
	cn_effecttext : string;
	icon : number;
	trigger : number[];
	effect : number;
	value : number;
	stamina : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_name

		let value = <string> Game.lang.getValue("skill", this.id, "name");
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

		let value = <string> Game.lang.getValue("skill", this.id, "tips");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_tips
	}
	get effecttext():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_effecttext

		let value = <string> Game.lang.getValue("skill", this.id, "effecttext");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_effecttext
	}

}