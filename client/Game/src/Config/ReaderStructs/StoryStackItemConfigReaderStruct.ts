/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryStackItemConfig from "../ConfigExtends/StoryStackItemConfig";


export default class StoryStackItemConfigReaderStruct extends CsvConfigRender<    StoryStackItemConfig      >
{
	tableName = "StoryStackItem";


    ParseCsv(csv: string[] )
    {
		let config = new StoryStackItemConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.num = csvGetInt(csv,  this.GetHeadIndex(  "num"  )   );
		config.rate = csvGetInt(csv,  this.GetHeadIndex(  "rate"  )   );

		


		this.addConfig(config);
    }
}