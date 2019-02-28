/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class MovieExpectConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	tips : string;
	expect_req_min : number;
	expect_req_max : number;
	pic : number;
	gain_up : number;
	zh_cn_pic_word : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("movieExpect", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get pic_word():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_pic_word

		let value = <string> Game.lang.getValue("movieExpect", this.id, "pic_word");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_pic_word
	}

}