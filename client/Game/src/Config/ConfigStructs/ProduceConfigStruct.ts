/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class ProduceConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	item : number;
	zh_cn_tip : string;
	grade : number;
	unlock_level : number;
	unlock_building : number;
	unlock_gold : DTItemNum;
	unlock_reward : DTItemNum;
	cd : number;
	icon : number;
	cheer_sex : number;
	cheer_continents : number;
	cheer_type : number;
	cheer_age : number;
	pre_id : number;
	next_line : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("produce", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get tip():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_tip

		let value = <string> Game.lang.getValue("produce", this.id, "tip");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_tip
	}

}