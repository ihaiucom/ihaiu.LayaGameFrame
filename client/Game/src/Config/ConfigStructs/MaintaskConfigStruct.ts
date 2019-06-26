/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class MaintaskConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	level : number;
	next_id : number;
	require : number;
	r_value : number;
	s_r_value : number;
	zh_cn_info : string;
	reward : number;
	pre_quest : number;
	plot : boolean;
	UI : number;
	finger : boolean;
	finger_postion : string;
	halo : boolean;
	halo_postion : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("maintask", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get info():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_info

		let value = <string> Game.lang.getValue("maintask", this.id, "info");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_info
	}

}