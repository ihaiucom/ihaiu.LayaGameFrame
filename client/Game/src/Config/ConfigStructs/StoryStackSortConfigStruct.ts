/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import DTStoryEffect from "../ConfigExtends/DTStoryEffect";
import Game from "../../Game";



export default class StoryStackSortConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	storySeriesId : number[];
	rewards : DTItemNum[];
	additionScene : DTStoryEffect[];





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("storyStackSort", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}