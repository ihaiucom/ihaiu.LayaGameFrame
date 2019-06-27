/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class PropertyConfigStruct extends BaseConfig
{


	id : number;
	field : string;
	zh_cn_name : string;
	zh_cn_addname : string;
	addnamenum : number;
	details : boolean;
	icon : number;
	groupType : number;
	visible : boolean;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("property", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get addname():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_addname

		let value = <string> Game.lang.getValue("property", this.id, "addname");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_addname
	}

}