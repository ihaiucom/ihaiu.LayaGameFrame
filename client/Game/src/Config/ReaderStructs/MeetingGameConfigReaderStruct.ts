/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MeetingGameConfig from "../ConfigExtends/MeetingGameConfig";
import DTlValue2 from "../ConfigExtends/DTlValue2";


export default class MeetingGameConfigReaderStruct extends CsvConfigRender<    MeetingGameConfig      >
{
	tableName = "MeetingGame";


    ParseCsv(csv: string[] )
    {
		let config = new MeetingGameConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetString(csv,  this.GetHeadIndex(  "type"  )   );
		config.result = csvGetInt(csv,  this.GetHeadIndex(  "result"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.times =  DTlValue2.parse(       csvGetString(csv,  this.GetHeadIndex(  "times"  )   )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}