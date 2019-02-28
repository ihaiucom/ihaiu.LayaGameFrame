/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryRateConfig from "../ConfigExtends/StoryRateConfig";


export default class StoryRateConfigReaderStruct extends CsvConfigRender<    StoryRateConfig      >
{
	tableName = "StoryRate";


    ParseCsv(csv: string[] )
    {
		let config = new StoryRateConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.rate = csvGetInt(csv,  this.GetHeadIndex(  "rate"  )   );

		


		this.addConfig(config);
    }
}