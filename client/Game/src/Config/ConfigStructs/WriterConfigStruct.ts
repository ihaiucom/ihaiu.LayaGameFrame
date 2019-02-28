/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class WriterConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	quality : number;
	head : number;
	advanced_ability : number;
	special_skill : number[];
	skill_level : number[];
	employee_cost : DTItemNum;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("writer", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}