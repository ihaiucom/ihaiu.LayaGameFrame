/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MsgChatConfig from "../ConfigExtends/MsgChatConfig";
import DTlValue2 from "../ConfigExtends/DTlValue2";


export default class MsgChatConfigReaderStruct extends CsvConfigRender<    MsgChatConfig      >
{
	tableName = "MsgChat";


    ParseCsv(csv: string[] )
    {
		let config = new MsgChatConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );
		config.zh_cn_notice = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_notice"  )   );
		config.parameter =  DTlValue2.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter"  )   )   );
		config.popup =  DTlValue2.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "popup"  )   )   );

		


		this.addConfig(config);
    }
}