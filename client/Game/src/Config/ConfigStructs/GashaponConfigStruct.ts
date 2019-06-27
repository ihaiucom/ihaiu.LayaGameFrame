/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTFixItemNum from "../ConfigExtends/DTFixItemNum";
import DTDateTime from "../ConfigExtends/DTDateTime";



export default class GashaponConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	menu : number;
	num : number;
	cost : DTFixItemNum[];
	freeNum : number;
	freeTime : number;
	startTime : DTDateTime;
	endTime : DTDateTime;
	pic : number;
	rewardId : number;
	allowance : DTFixItemNum[];
	allowanceNum : number;
	desc : string;





	

}