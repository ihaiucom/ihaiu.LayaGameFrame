/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class WeeklyQuestConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	zh_cn_des : string;
	target_score : number;
	target_days : number;
	reward : DTItemNum[];





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("weeklyQuest", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get des():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_des

		let value = <string> Game.lang.getValue("weeklyQuest", this.id, "des");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_des
	}

}