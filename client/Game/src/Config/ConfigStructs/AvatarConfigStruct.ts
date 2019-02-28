/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTVector2 from "../ConfigExtends/DTVector2";
import Game from "../../Game";



export default class AvatarConfigStruct extends BaseConfig
{


	id : number;
	name_e : string;
	name_c : string;
	body_icon : string;
	zh_cn_icon : string;
	en_icon : string;
	piece_icon : string;
	model_skin : string;
	model_bones : string;
	bg_pic : string;
	co_vector : DTVector2;





	
	get icon():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_icon

		let value = <string> Game.lang.getValue("avatar", this.id, "icon");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_icon
	}

}