/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTlValue2 from "../ConfigExtends/DTlValue2";
import Game from "../../Game";



export default class MeetingGameConfigStruct extends BaseConfig
{


	id : number;
	type : string;
	result : number;
	zh_cn_name : string;
	times : DTlValue2;
	tips : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("meetingGame", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}