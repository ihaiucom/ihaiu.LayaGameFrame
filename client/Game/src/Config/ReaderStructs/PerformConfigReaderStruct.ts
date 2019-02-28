/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import PerformConfig from "../ConfigExtends/PerformConfig";


export default class PerformConfigReaderStruct extends CsvConfigRender<    PerformConfig      >
{
	tableName = "Perform";


    ParseCsv(csv: string[] )
    {
		let config = new PerformConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.building = csvGetInt(csv,  this.GetHeadIndex(  "building"  )   );
		config.weight = csvGetInt(csv,  this.GetHeadIndex(  "weight"  )   );
		config.event =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "event"  )   )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}