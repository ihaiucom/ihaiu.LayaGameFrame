/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import RandomSurnameConfig from "../ConfigExtends/RandomSurnameConfig";


export default class RandomSurnameConfigReaderStruct extends CsvConfigRender<    RandomSurnameConfig      >
{
	tableName = "RandomSurname";


    ParseCsv(csv: string[] )
    {
		let config = new RandomSurnameConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.text = csvGetString(csv,  this.GetHeadIndex(  "text"  )   );

		


		this.addConfig(config);
    }
}