/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActivitiesConfig from "../ConfigExtends/ActivitiesConfig";


export default class ActivitiesConfigReaderStruct extends CsvConfigRender<    ActivitiesConfig      >
{
	tableName = "Activities";


    ParseCsv(csv: string[] )
    {
		let config = new ActivitiesConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.zh_cn_activities_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_activities_name"  )   );
		config.start_type = csvGetInt(csv,  this.GetHeadIndex(  "start_type"  )   );
		config.level_req = csvGetInt(csv,  this.GetHeadIndex(  "level_req"  )   );
		config.block_req = csvGetInt(csv,  this.GetHeadIndex(  "block_req"  )   );
		config.start = csvGetInt(csv,  this.GetHeadIndex(  "start"  )   );
		config.duration = csvGetInt(csv,  this.GetHeadIndex(  "duration"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.icon_chosen = csvGetInt(csv,  this.GetHeadIndex(  "icon_chosen"  )   );
		config.zh_cn_activities_info = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_activities_info"  )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}