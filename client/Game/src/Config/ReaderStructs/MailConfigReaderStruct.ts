/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MailConfig from "../ConfigExtends/MailConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class MailConfigReaderStruct extends CsvConfigRender<    MailConfig      >
{
	tableName = "Mail";


    ParseCsv(csv: string[] )
    {
		let config = new MailConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.life_time = csvGetInt(csv,  this.GetHeadIndex(  "life_time"  )   );
		config.zh_cn_title = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_title"  )   );
		config.en_title = csvGetString(csv,  this.GetHeadIndex(  "en_title"  )   );
		config.item =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "item"  )   )   );
		config.zh_cn_content = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_content"  )   );
		config.en_content = csvGetString(csv,  this.GetHeadIndex(  "en_content"  )   );

		


		this.addConfig(config);
    }
}