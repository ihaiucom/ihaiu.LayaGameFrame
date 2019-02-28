/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class OscarConfigStruct extends BaseConfig
{


	id : number;
	oscar_type : number;
	compere_type : number;
	zh_cn_content : string;
	content_duration : number;
	act : string;
	act_duration : number;





	
	get content():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_content

		let value = <string> Game.lang.getValue("oscar", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_content
	}

}