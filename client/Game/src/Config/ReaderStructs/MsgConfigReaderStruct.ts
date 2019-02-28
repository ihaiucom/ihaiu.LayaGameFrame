/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MsgConfig from "../ConfigExtends/MsgConfig";


export default class MsgConfigReaderStruct extends CsvConfigRender<    MsgConfig      >
{
	tableName = "Msg";


    ParseCsv(csv: string[] )
    {
		let config = new MsgConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
		config.module = csvGetString(csv,  this.GetHeadIndex(  "module"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.zh_cn_notice = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_notice"  )   );
		config.en_notice = csvGetString(csv,  this.GetHeadIndex(  "en_notice"  )   );

		


		this.addConfig(config);
    }
}