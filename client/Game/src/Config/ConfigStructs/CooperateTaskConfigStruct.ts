/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class CooperateTaskConfigStruct extends BaseConfig
{


	id : number;
	task_name : string;
	task_star : number;
	task_type : number;
	parameter1 : number[];
	parameter2 : number[];
	parameter3 : number[];
	parameter4 : number[];
	parameter5 : number[];
	reward_id : DTItemNum[];





	

}