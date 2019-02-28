/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class ServerRankingListConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	rank : number[];
	normal_reward : DTItemNum[];
	spec_reward : DTItemNum[];





	

}