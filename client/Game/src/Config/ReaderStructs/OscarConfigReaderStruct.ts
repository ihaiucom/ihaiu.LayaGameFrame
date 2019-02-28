/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import OscarConfig from "../ConfigExtends/OscarConfig";


export default class OscarConfigReaderStruct extends CsvConfigRender<    OscarConfig      >
{
	tableName = "Oscar";


    ParseCsv(csv: string[] )
    {
		let config = new OscarConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.oscar_type = csvGetInt(csv,  this.GetHeadIndex(  "oscar_type"  )   );
		config.compere_type = csvGetInt(csv,  this.GetHeadIndex(  "compere_type"  )   );
		config.zh_cn_content = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_content"  )   );
		config.content_duration = csvGetInt(csv,  this.GetHeadIndex(  "content_duration"  )   );
		config.act = csvGetString(csv,  this.GetHeadIndex(  "act"  )   );
		config.act_duration = csvGetInt(csv,  this.GetHeadIndex(  "act_duration"  )   );

		


		this.addConfig(config);
    }
}