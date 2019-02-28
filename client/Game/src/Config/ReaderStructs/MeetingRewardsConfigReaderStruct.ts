/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MeetingRewardsConfig from "../ConfigExtends/MeetingRewardsConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class MeetingRewardsConfigReaderStruct extends CsvConfigRender<    MeetingRewardsConfig      >
{
	tableName = "MeetingRewards";


    ParseCsv(csv: string[] )
    {
		let config = new MeetingRewardsConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.rewards =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "rewards"  )   )   );
		config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );
		config.rate = csvGetInt(csv,  this.GetHeadIndex(  "rate"  )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}