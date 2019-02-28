/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class MovieDropConfigStruct extends BaseConfig
{


	id : number;
	gain_level : number;
	zh_cn_gain_name : string;
	gain_pic : number;
	zh_cn_name : string;
	order_num : number;
	oreder_qua : number[];
	expect : number;
	fixed_drop : DTItemNum[];
	drop_num : number;
	drop_item : number[];
	item_num : number[];
	base_fans : number;





	
	get gain_name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_gain_name

		let value = <string> Game.lang.getValue("movieDrop", this.id, "gain_name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_gain_name
	}
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("movieDrop", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}