/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class SpeakConfigStruct extends BaseConfig
{


	id : number;
	en_speak : string;
	cn_speak : string;
	tips : string;





	
	get speak():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_speak

		let value = <string> Game.lang.getValue("speak", this.id, "speak");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_speak
	}

}