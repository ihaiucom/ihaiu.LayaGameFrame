/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import RandomNameConfig from "../ConfigExtends/RandomNameConfig";


export default class RandomNameConfigReaderStruct extends CsvConfigRender<    RandomNameConfig      >
{
	tableName = "RandomName";


    ParseCsv(csv: string[] )
    {
		let config = new RandomNameConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.text = csvGetString(csv,  this.GetHeadIndex(  "text"  )   );

		


		this.addConfig(config);
    }
}