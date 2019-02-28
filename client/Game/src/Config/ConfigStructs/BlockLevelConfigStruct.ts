/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class BlockLevelConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	pic : number;
	upgrade_req : number;
	upgrade_menu : number[];
	upgrade_reward : DTItemNum[];
	daily_reward : DTItemNum;
	cinema : number[];
	storysearchcost : DTItemNum;
	storysearchdollar : number;
	level_multiple : number;
	level_con : number;
	theater_level_con : number;
	good : number;
	big_sell : number;
	great_sell : number;
	myth_sell : number;
	marvel_sell : number;
	zh_cn_current_msg : string[];
	zh_cn_next_msg : string[];
	movie_daily_reward : DTItemNum[];
	task_cd : number;
	city_gold : number;
	city_fans : number;
	party_guest : number;
	story_num : number;
	city_envoy_max : number;
	finance_exchange : number;
	actor_max : number;
	certificate : number;
	sequel_max : number;
	screenwriter_max : number;
	story_refresh_times : number;
	box_target1 : number;
	box_target1_reward : DTItemNum;
	box_target2 : number;
	box_target2_reward : DTItemNum;
	box_target3 : number;
	box_target3_reward : DTItemNum;
	box_target_all : number;
	box_target_all_reward : DTItemNum;
	new_effect : boolean;
	zh_cn_name_tips : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("blockLevel", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get current_msg():string[]
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_current_msg

		let value = <string[]> Game.lang.getValue("blockLevel", this.id, "current_msg");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_current_msg
	}
	get next_msg():string[]
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_next_msg

		let value = <string[]> Game.lang.getValue("blockLevel", this.id, "next_msg");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_next_msg
	}
	get name_tips():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name_tips

		let value = <string> Game.lang.getValue("blockLevel", this.id, "name_tips");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name_tips
	}

}