/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import SecretaryConfig from "../ConfigExtends/SecretaryConfig";


export default class SecretaryConfigReaderStruct extends CsvConfigRender<    SecretaryConfig      >
{
	tableName = "Secretary";


    ParseCsv(csv: string[] )
    {
		let config = new SecretaryConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
		config.zh_cn_info = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_info"  )   );
		config.par = csvGetInt(csv,  this.GetHeadIndex(  "par"  )   );
		config.description = csvGetString(csv,  this.GetHeadIndex(  "description"  )   );

		


		this.addConfig(config);
    }
}