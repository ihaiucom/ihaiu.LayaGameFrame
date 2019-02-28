/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class MovieShootTypeConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	zh_cn_type_des : string;
	item_id : number;
	item_num : number;
	pic : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("movieShootType", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get type_des():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_type_des

		let value = <string> Game.lang.getValue("movieShootType", this.id, "type_des");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_type_des
	}

}