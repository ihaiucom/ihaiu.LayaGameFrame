/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import SysTimeConfig from "../ConfigExtends/SysTimeConfig";


export default class SysTimeConfigReaderStruct extends CsvConfigRender<    SysTimeConfig      >
{
	tableName = "SysTime";


    ParseCsv(csv: string[] )
    {
		let config = new SysTimeConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
		config.hour = csvGetInt(csv,  this.GetHeadIndex(  "hour"  )   );
		config.min = csvGetInt(csv,  this.GetHeadIndex(  "min"  )   );
		config.sec = csvGetInt(csv,  this.GetHeadIndex(  "sec"  )   );

		


		this.addConfig(config);
    }
}