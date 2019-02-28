/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTPerformActoin from "../ConfigExtends/DTPerformActoin";
import DTPerformSpeak from "../ConfigExtends/DTPerformSpeak";



export default class EventConfigStruct extends BaseConfig
{


	id : number;
	model : number;
	type : number;
	action : DTPerformActoin[];
	speak : DTPerformSpeak[];
	tips : string;





	

}