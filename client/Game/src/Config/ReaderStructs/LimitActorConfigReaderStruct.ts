/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import LimitActorConfig from "../ConfigExtends/LimitActorConfig";


export default class LimitActorConfigReaderStruct extends CsvConfigRender<    LimitActorConfig      >
{
	tableName = "LimitActor";


    ParseCsv(csv: string[] )
    {
		let config = new LimitActorConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
		config.Asset_type_num_1 = csvGetInt(csv,  this.GetHeadIndex(  "Asset_type_num_1"  )   );
		config.Asset_type_num_2 = csvGetInt(csv,  this.GetHeadIndex(  "Asset_type_num_2"  )   );
		config.Asset_type_num_3 = csvGetInt(csv,  this.GetHeadIndex(  "Asset_type_num_3"  )   );
		config.Asset_type_num_4 = csvGetInt(csv,  this.GetHeadIndex(  "Asset_type_num_4"  )   );
		config.time_limit = csvGetInt(csv,  this.GetHeadIndex(  "time_limit"  )   );

		


		this.addConfig(config);
    }
}