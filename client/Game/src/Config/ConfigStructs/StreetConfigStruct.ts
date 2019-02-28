/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTVector2 from "../ConfigExtends/DTVector2";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class StreetConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	en_name : string;
	city_schedule : number;
	position : DTVector2;
	spokesperson_sex : number;
	spokesperson_Continents : number;
	spokesperson_type : number;
	spokesperson_age : number;
	spokesperson_scene : number;
	spokesperson_performance : number;
	spokesperson_plot : number;
	spokesperson_art : number;
	spokesperson_entertainment : number;
	publicize_schedule : number;
	publicize_cost : number;
	once_reward : number;
	finale_reward : DTItemNum[];
	expect : number;
	pre_id : number;
	next_stage : number;
	city : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("street", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}