/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class BuildingEffectConfigStruct extends BaseConfig
{


	id : number;
	tips : string;
	level : number;
	zh_cn_effect_des : string;
	effect : number;
	par1 : number;
	par2 : number;
	par3 : number;
	par4 : number;
	par5 : number;





	
	get effect_des():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_effect_des

		let value = <string> Game.lang.getValue("buildingEffect", this.id, "effect_des");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_effect_des
	}

}