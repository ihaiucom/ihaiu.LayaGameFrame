/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MsgProtoErrorConfig from "../ConfigExtends/MsgProtoErrorConfig";


export default class MsgProtoErrorConfigReaderStruct extends CsvConfigRender<    MsgProtoErrorConfig      >
{
	tableName = "MsgProtoError";


    ParseCsv(csv: string[] )
    {
		let config = new MsgProtoErrorConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
		config.module = csvGetString(csv,  this.GetHeadIndex(  "module"  )   );
		config.zh_cn_notice = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_notice"  )   );

		


		this.addConfig(config);
    }
}