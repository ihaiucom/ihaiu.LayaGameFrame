/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTlValue2 from "../ConfigExtends/DTlValue2";
import DTlValue3 from "../ConfigExtends/DTlValue3";
import DTPerformActoin from "../ConfigExtends/DTPerformActoin";



export default class GlobalConfigStruct extends BaseConfig
{


	id : number;
	key : string;
	name : string;
	value : number;
	value4 : string;
	value1 : number[];
	value2 : DTlValue2[];
	value3 : DTlValue3[];
	value5 : DTPerformActoin[];
	tips : string;





	

}