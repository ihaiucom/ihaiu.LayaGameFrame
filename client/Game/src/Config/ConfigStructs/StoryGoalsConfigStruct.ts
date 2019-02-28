/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class StoryGoalsConfigStruct extends BaseConfig
{


	id : number;
	storyid : number;
	rank : number;
	property1 : number;
	value1 : number;
	property2 : number;
	value2 : number;
	reward : DTItemNum[];
	info : string;





	

}