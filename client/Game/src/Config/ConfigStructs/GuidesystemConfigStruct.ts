/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTVector2 from "../ConfigExtends/DTVector2";
import Game from "../../Game";



export default class GuidesystemConfigStruct extends BaseConfig
{


	id : number;
	group : number;
	order : number;
	finish_type : number;
	finish_value_1 : number;
	finish_value_2 : number;
	trigger_type : number;
	trigger_value : number;
	break_guide : number;
	next_guide : number;
	path_id : number;
	path_par1 : number;
	assistant : boolean;
	position : DTVector2;
	cn_content : string;
	en_content : string;
	f_direction : number;
	halo : boolean;
	radius : number;
	storyline : boolean;
	storyline_id : number;
	force : boolean;
	stay : boolean;
	tips : string;
	tips2 : string;





	
	get content():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_content

		let value = <string> Game.lang.getValue("guidesystem", this.id, "content");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_content
	}

}