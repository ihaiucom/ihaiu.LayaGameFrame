/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MovieMidiaEvaluationMsgConfig from "../ConfigExtends/MovieMidiaEvaluationMsgConfig";


export default class MovieMidiaEvaluationMsgConfigReaderStruct extends CsvConfigRender<    MovieMidiaEvaluationMsgConfig      >
{
	tableName = "MovieMidiaEvaluationMsg";


    ParseCsv(csv: string[] )
    {
		let config = new MovieMidiaEvaluationMsgConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.score_min = csvGetInt(csv,  this.GetHeadIndex(  "score_min"  )   );
		config.scor_max = csvGetInt(csv,  this.GetHeadIndex(  "scor_max"  )   );
		config.zh_cn_msg = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_msg"  )   );

		


		this.addConfig(config);
    }
}