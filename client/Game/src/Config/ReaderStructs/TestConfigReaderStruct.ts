/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import TestConfig from "../ConfigExtends/TestConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import DTVector2 from "../ConfigExtends/DTVector2";
import DTStoryNum from "../ConfigExtends/DTStoryNum";


export default class TestConfigReaderStruct extends CsvConfigRender<    TestConfig      >
{
	tableName = "Test";


    ParseCsv(csv: string[] )
    {
		let config = new TestConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.age = csvGetInt(csv,  this.GetHeadIndex(  "age"  )   );
		config.intArray =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "intArray"  )   )   );
		config.coin =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "coin"  )   )   );
		config.items =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "items"  )   )   );
		config.position =  DTVector2.parse(       csvGetString(csv,  this.GetHeadIndex(  "position"  )   )   );
		config.story =  DTStoryNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "story"  )   )   );

		


		this.addConfig(config);
    }
}