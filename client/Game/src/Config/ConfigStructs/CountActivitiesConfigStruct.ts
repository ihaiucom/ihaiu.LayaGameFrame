/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class CountActivitiesConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	count : number;
	special_reward : DTItemNum[];
	image : string;
	reward : DTItemNum[];
	info : string;





	

}