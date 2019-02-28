/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class MovieAdaptationMsgConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	adaptation_min : number;
	adaptation_max : number;
	zh_cn_msg1 : string;
	zh_cn_msg2 : string;
	zh_cn_msg3 : string;





	
	get msg1():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_msg1

		let value = <string> Game.lang.getValue("movieAdaptationMsg", this.id, "msg1");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_msg1
	}
	get msg2():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_msg2

		let value = <string> Game.lang.getValue("movieAdaptationMsg", this.id, "msg2");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_msg2
	}
	get msg3():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_msg3

		let value = <string> Game.lang.getValue("movieAdaptationMsg", this.id, "msg3");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_msg3
	}

}