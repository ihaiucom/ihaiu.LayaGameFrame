/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class CountryConfigStruct extends BaseConfig
{


	id : number;
	number : number;
	zh_cn_name : string;
	en_name : string;
	city_num : number;
	icon : number;
	flag : number;
	reward : DTItemNum[];
	pre_id : number;
	next_country : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("country", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}