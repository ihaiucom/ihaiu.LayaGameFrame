/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MovieAdaptationMsgConfig from "../ConfigExtends/MovieAdaptationMsgConfig";


export default class MovieAdaptationMsgConfigReaderStruct extends CsvConfigRender<    MovieAdaptationMsgConfig      >
{
	tableName = "MovieAdaptationMsg";


    ParseCsv(csv: string[] )
    {
		let config = new MovieAdaptationMsgConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.adaptation_min = csvGetInt(csv,  this.GetHeadIndex(  "adaptation_min"  )   );
		config.adaptation_max = csvGetInt(csv,  this.GetHeadIndex(  "adaptation_max"  )   );
		config.zh_cn_msg1 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_msg1"  )   );
		config.zh_cn_msg2 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_msg2"  )   );
		config.zh_cn_msg3 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_msg3"  )   );

		


		this.addConfig(config);
    }
}