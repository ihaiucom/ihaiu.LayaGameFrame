/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class OperationTasksScoreConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	score : number;
	rewards : DTItemNum[];
	icon : number;
	info : string;





	

}