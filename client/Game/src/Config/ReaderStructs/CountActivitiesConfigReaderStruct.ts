/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import CountActivitiesConfig from "../ConfigExtends/CountActivitiesConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class CountActivitiesConfigReaderStruct extends CsvConfigRender<    CountActivitiesConfig      >
{
	tableName = "CountActivities";


    ParseCsv(csv: string[] )
    {
		let config = new CountActivitiesConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.count = csvGetInt(csv,  this.GetHeadIndex(  "count"  )   );
		config.special_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "special_reward"  )   )   );
		config.image = csvGetString(csv,  this.GetHeadIndex(  "image"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}