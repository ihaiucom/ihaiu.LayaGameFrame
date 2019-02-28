/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import DTVector2 from "../ConfigExtends/DTVector2";
import DTStoryNum from "../ConfigExtends/DTStoryNum";



export default class TestConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	age : number;
	intArray : number[];
	coin : DTItemNum;
	items : DTItemNum[];
	position : DTVector2;
	story : DTStoryNum;





	

}