/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import SpeakConfig from "../ConfigExtends/SpeakConfig";


export default class SpeakConfigReaderStruct extends CsvConfigRender<    SpeakConfig      >
{
	tableName = "Speak";


    ParseCsv(csv: string[] )
    {
		let config = new SpeakConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.en_speak = csvGetString(csv,  this.GetHeadIndex(  "en_speak"  )   );
		config.cn_speak = csvGetString(csv,  this.GetHeadIndex(  "cn_speak"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}