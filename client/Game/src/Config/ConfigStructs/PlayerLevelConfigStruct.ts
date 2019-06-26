/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTFixItemNum from "../ConfigExtends/DTFixItemNum";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class PlayerLevelConfigStruct extends BaseConfig
{


	id : number;
	exp : number;
	reward : DTFixItemNum[];
	story : DTItemNum;
	order_qua : number[];
	order_num : number;
	train_max : number;
	train_count : number;
	actor_max : number;
	actor_count : number;
	hide_max : number;
	hide_count : number;
	day_max : number;
	day : number;
	meeting_cd : number;
	cost : DTItemNum;
	mc_special_package1 : DTItemNum;
	mc_special_package2 : DTItemNum;
	shop_1003 : number;
	shop_1004 : number;
	Turntable_min : number;
	Turntable_max : number;





	

}