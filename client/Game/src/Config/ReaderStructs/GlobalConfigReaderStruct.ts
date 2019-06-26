/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import GlobalConfig from "../ConfigExtends/GlobalConfig";
import DTValue2 from "../ConfigExtends/DTValue2";
import DTValue3 from "../ConfigExtends/DTValue3";
import DTPerformActoin from "../ConfigExtends/DTPerformActoin";


export default class GlobalConfigReaderStruct extends CsvConfigRender<    GlobalConfig      >
{
	tableName = "Global";


    ParseCsv(csv: string[] )
    {
		let config = new GlobalConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.value = csvGetInt(csv,  this.GetHeadIndex(  "value"  )   );
		config.value6 = csvGetFloat(csv,  this.GetHeadIndex(  "value6"  )   );
		config.value4 = csvGetString(csv,  this.GetHeadIndex(  "value4"  )   );
		config.value1 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "value1"  )   )   );
		config.value2 =  DTValue2.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "value2"  )   )   );
		config.value3 =  DTValue3.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "value3"  )   )   );
		config.value5 =  DTPerformActoin.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "value5"  )   )   );

		


		this.addConfig(config);
    }
}