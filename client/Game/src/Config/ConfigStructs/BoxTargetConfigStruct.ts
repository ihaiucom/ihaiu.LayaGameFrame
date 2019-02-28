/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class BoxTargetConfigStruct extends BaseConfig
{


	id : number;
	target : number;
	zh_cn_dialog : string;
	zh_cn_title : string;
	zh_cn_targettext : string;
	zh_cn_timetext : string;
	time : number;
	zh_cn_reward : string;
	zh_cn_final : string;
	zh_cn_button : string;





	
	get dialog():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_dialog

		let value = <string> Game.lang.getValue("boxTarget", this.id, "dialog");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_dialog
	}
	get title():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_title

		let value = <string> Game.lang.getValue("boxTarget", this.id, "title");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_title
	}
	get targettext():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_targettext

		let value = <string> Game.lang.getValue("boxTarget", this.id, "targettext");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_targettext
	}
	get timetext():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_timetext

		let value = <string> Game.lang.getValue("boxTarget", this.id, "timetext");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_timetext
	}
	get reward():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_reward

		let value = <string> Game.lang.getValue("boxTarget", this.id, "reward");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_reward
	}
	get final():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_final

		let value = <string> Game.lang.getValue("boxTarget", this.id, "final");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_final
	}
	get button():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_button

		let value = <string> Game.lang.getValue("boxTarget", this.id, "button");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_button
	}

}