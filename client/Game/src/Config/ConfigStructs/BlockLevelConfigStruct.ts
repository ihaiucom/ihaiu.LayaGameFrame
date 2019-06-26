/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class BlockLevelConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	pic : number;
	firstRate : number;
	continueRate : number;
	gradeScore : number;
	praiseScore : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("blockLevel", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}