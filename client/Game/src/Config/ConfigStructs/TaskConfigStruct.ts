/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class TaskConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	unlock : number;
	require : number;
	goal : number;
	s_goal : number;
	type : number;
	reward : DTItemNum[];
	Complete : number;
	pre_id : number;
	guide : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("task", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}