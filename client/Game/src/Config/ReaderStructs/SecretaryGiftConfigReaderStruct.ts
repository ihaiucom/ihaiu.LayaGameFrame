/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import SecretaryGiftConfig from "../ConfigExtends/SecretaryGiftConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class SecretaryGiftConfigReaderStruct extends CsvConfigRender<    SecretaryGiftConfig      >
{
	tableName = "SecretaryGift";


    ParseCsv(csv: string[] )
    {
		let config = new SecretaryGiftConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.items =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "items"  )   )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}