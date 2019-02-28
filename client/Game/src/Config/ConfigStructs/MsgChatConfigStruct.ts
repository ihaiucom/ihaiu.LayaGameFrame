/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTlValue2 from "../ConfigExtends/DTlValue2";
import Game from "../../Game";



export default class MsgChatConfigStruct extends BaseConfig
{


	id : number;
	key : string;
	info : string;
	zh_cn_notice : string;
	parameter : DTlValue2[];
	popup : DTlValue2[];





	
	get notice():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_notice

		let value = <string> Game.lang.getValue("msgChat", this.id, "notice");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_notice
	}

}