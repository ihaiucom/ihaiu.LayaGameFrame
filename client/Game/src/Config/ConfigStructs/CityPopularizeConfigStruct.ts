/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class CityPopularizeConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	level_out_3 : number;
	level_num_3 : number;
	level_chance_3 : number;
	level_out_7 : number;
	level_num_7 : number;
	level_chance_7 : number;
	level_out_10 : number;
	level_num_10 : number;
	level_chance_10 : number;
	level_out_15 : number;
	level_num_15 : number;
	level_chance_15 : number;
	level_out_20 : number;
	level_num_20 : number;
	level_chance_20 : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("cityPopularize", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}