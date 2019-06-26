/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import CountActivitiesConfig from "../ConfigExtends/CountActivitiesConfig";


export default class CountActivitiesConfigReaderStruct extends CsvConfigRender<    CountActivitiesConfig      >
{
	tableName = "CountActivities";


    ParseCsv(csv: string[] )
    {
		let config = new CountActivitiesConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.rewardId = csvGetInt(csv,  this.GetHeadIndex(  "rewardId"  )   );
		config.avatar = csvGetInt(csv,  this.GetHeadIndex(  "avatar"  )   );

		


		this.addConfig(config);
    }
}