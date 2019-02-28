/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class ActorAideConfigStruct extends BaseConfig
{


	id : number;
	star : number;
	aide_type : number;
	number : number;
	lv : number;
	cost : number;
	introduction : DTItemNum;
	en_name : string;
	cn_name : string;
	avatar : number;
	secondary_property : number;
	main_property : number;
	tips : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_name

		let value = <string> Game.lang.getValue("actorAide", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_name
	}

}