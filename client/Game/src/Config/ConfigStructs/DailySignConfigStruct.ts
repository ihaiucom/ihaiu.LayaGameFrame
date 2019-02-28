/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class DailySignConfigStruct extends BaseConfig
{


	id : number;
	cycle : number;
	day : number;
	reward : DTItemNum;
	info : string;





	

}