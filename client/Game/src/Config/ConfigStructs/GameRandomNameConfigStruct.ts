/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class GameRandomNameConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	zh_cn_names : string[];
	tips : string;





	
	get names():string[]
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_names

		let value = <string[]> Game.lang.getValue("gameRandomName", this.id, "names");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_names
	}

}