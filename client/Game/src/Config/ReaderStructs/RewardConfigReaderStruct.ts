/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import RewardConfig from "../ConfigExtends/RewardConfig";
import DTFixItemNum from "../ConfigExtends/DTFixItemNum";
import DTRewardRandom from "../ConfigExtends/DTRewardRandom";


export default class RewardConfigReaderStruct extends CsvConfigRender<    RewardConfig      >
{
	tableName = "Reward";


    ParseCsv(csv: string[] )
    {
		let config = new RewardConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.fixedItems =  DTFixItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "fixedItems"  )   )   );
		config.multipleReward = csvGetInt(csv,  this.GetHeadIndex(  "multipleReward"  )   );
		config.randomItems =  DTRewardRandom.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "randomItems"  )   )   );
		config.randomCount = csvGetInt(csv,  this.GetHeadIndex(  "randomCount"  )   );

		


		this.addConfig(config);
    }
}