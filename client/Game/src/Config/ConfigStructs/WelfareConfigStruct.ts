/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class WelfareConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	icon : number;
	icon_chosen : number;
	zh_cn_activities_name : string;
	info : string;





	
	get activities_name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_activities_name

		let value = <string> Game.lang.getValue("welfare", this.id, "activities_name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_activities_name
	}

}