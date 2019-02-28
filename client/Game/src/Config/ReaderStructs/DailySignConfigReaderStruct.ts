/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import DailySignConfig from "../ConfigExtends/DailySignConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class DailySignConfigReaderStruct extends CsvConfigRender<    DailySignConfig      >
{
	tableName = "DailySign";


    ParseCsv(csv: string[] )
    {
		let config = new DailySignConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.cycle = csvGetInt(csv,  this.GetHeadIndex(  "cycle"  )   );
		config.day = csvGetInt(csv,  this.GetHeadIndex(  "day"  )   );
		config.reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}