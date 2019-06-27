/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTFixItemNum from "../ConfigExtends/DTFixItemNum";
import DTRewardRandom from "../ConfigExtends/DTRewardRandom";



export default class RewardConfigStruct extends BaseConfig
{


	id : number;
	fixedItems : DTFixItemNum[];
	multipleReward : number;
	randomItems : DTRewardRandom[];
	randomCount : number;





	

}