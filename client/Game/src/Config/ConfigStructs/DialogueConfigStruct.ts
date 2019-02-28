/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class DialogueConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	face : number;
	zh_cn_content : string;





	
	get content():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_content

		let value = <string> Game.lang.getValue("dialogue", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_content
	}

}