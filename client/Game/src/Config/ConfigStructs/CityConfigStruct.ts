/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class CityConfigStruct extends BaseConfig
{


	id : number;
	city_num : number;
	zh_cn_name : string;
	en_name : string;
	street_num : number;
	street_id : number[];
	show_cost : number;
	show_need : number;
	hold_reward : DTItemNum[];
	envoy1_sex : number;
	envoy1_Continents : number;
	envoy1_type : number;
	envoy1_age : number;
	envoy1_scene : number;
	envoy1_performance : number;
	envoy1_plot : number;
	envoy1_art : number;
	envoy1_entertainment : number;
	envoy2_sex : number;
	envoy2_Continents : number;
	envoy2_type : number;
	envoy2_age : number;
	envoy2_scene : number;
	envoy2_performance : number;
	envoy2_plot : number;
	envoy2_art : number;
	envoy2_entertainment : number;
	envoy3_sex : number;
	envoy3_Continents : number;
	envoy3_type : number;
	envoy3_age : number;
	envoy3_scene : number;
	envoy3_performance : number;
	envoy3_plot : number;
	envoy3_art : number;
	envoy3_entertainment : number;
	envoy4_sex : number;
	envoy4_Continents : number;
	envoy4_type : number;
	envoy4_age : number;
	envoy4_scene : number;
	envoy4_performance : number;
	envoy4_plot : number;
	envoy4_art : number;
	envoy4_entertainment : number;
	envoy5_sex : number;
	envoy5_Continents : number;
	envoy5_type : number;
	envoy5_age : number;
	envoy5_scene : number;
	envoy5_performance : number;
	envoy5_plot : number;
	envoy5_art : number;
	envoy5_entertainment : number;
	drop_out : number[];
	random_out : number[];
	order_qua : number[];
	order_num : number;
	expect : number;
	pre_id : number;
	next_city : number;
	cut_scene : number;
	new_user_guide : number;
	country : number;
	popularize_id : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("city", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}