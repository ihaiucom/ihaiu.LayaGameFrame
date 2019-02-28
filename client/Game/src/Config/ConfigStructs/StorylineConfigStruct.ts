/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class StorylineConfigStruct extends BaseConfig
{


	id : number;
	trigger : number;
	value : number;
	guide_type : number;
	guide_id : number;
	group : number;
	order : number;
	type_id : string;
	ui_type : number;
	cn_ui_content : string;
	en_ui_content : string;
	cn_content : string;
	en_content : string;
	cn_name : string;
	en_name : string;
	anchor : number;
	reward : DTItemNum[];





	
	get ui_content():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_ui_content

		let value = <string> Game.lang.getValue("storyline", this.id, "ui_content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_ui_content
	}
	get content():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_content

		let value = <string> Game.lang.getValue("storyline", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_content
	}
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_name

		let value = <string> Game.lang.getValue("storyline", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_name
	}

}