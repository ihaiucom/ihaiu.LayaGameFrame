/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import LanguageTypeConfig from "../ConfigExtends/LanguageTypeConfig";


export default class LanguageTypeConfigReaderStruct extends CsvConfigRender<    LanguageTypeConfig      >
{
	tableName = "LanguageType";


    ParseCsv(csv: string[] )
    {
		let config = new LanguageTypeConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetString(csv,  this.GetHeadIndex(  "type"  )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );
		config.value = csvGetString(csv,  this.GetHeadIndex(  "value"  )   );
		config.languageswitch = csvGetInt(csv,  this.GetHeadIndex(  "languageswitch"  )   );

		


		this.addConfig(config);
    }
}