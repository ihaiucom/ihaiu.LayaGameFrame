/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class CupPackageConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	zh_cn_des : string;
	target_type : number[];
	target_num : number;
	reward : DTItemNum[];
	limit_time : number;
	image : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("cupPackage", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get des():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_des

		let value = <string> Game.lang.getValue("cupPackage", this.id, "des");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_des
	}

}