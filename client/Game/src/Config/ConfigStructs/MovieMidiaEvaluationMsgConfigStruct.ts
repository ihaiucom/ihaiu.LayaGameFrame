/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class MovieMidiaEvaluationMsgConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	score_min : number;
	scor_max : number;
	zh_cn_msg : string;





	
	get msg():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_msg

		let value = <string> Game.lang.getValue("movieMidiaEvaluationMsg", this.id, "msg");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_msg
	}

}