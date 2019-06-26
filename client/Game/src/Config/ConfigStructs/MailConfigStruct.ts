/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class MailConfigStruct extends BaseConfig
{


	id : number;
	life_time : number;
	zh_cn_title : string;
	en_title : string;
	item : DTItemNum[];
	zh_cn_content : string;
	en_content : string;





	
	get title():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_title

		let value = <string> Game.lang.getValue("mail", this.id, "title");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_title
	}
	get content():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_content

		let value = <string> Game.lang.getValue("mail", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_content
	}

}