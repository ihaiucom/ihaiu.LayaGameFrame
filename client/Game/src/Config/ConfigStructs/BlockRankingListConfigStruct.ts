/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class BlockRankingListConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	type : number;
	rank : number;
	movie_reward : DTItemNum[];
	box_office_reward : DTItemNum[];
	extra_reward : DTItemNum[];
	congratulate_switch : boolean;
	congratulate_reward : DTItemNum;





	

}