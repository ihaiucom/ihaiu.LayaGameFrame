/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class RechargeConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	product_name : string;
	product_id : string;
	cost_dollar : number;
	item : DTItemNum;
	gift : DTItemNum[];
	double : number;
	go : number;
	term : number;
	is_show : boolean;
	limit : DTItemNum;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("recharge", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}