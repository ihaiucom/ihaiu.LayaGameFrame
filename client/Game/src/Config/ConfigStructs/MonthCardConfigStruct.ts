/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class MonthCardConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	serial : number;
	zh_cn_name : string;
	icon : number;
	actor : number;
	daily_gift_resource : DTItemNum;
	daily_gift_contract1 : DTItemNum;
	daily_gift_contract2 : DTItemNum;
	gift_crystal : DTItemNum;
	gift_item : DTItemNum;
	info : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("monthCard", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}