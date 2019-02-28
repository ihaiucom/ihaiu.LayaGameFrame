/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class OrderConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name1 : string;
	zh_cn_name2 : string;
	icon : number;
	block : number;
	need : DTItemNum[];
	quality : number;
	reward : DTItemNum;
	expect : number;





	
	get name1():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name1

		let value = <string> Game.lang.getValue("order", this.id, "name1");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name1
	}
	get name2():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name2

		let value = <string> Game.lang.getValue("order", this.id, "name2");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name2
	}

}