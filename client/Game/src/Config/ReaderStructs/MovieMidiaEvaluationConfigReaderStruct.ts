/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MovieMidiaEvaluationConfig from "../ConfigExtends/MovieMidiaEvaluationConfig";


export default class MovieMidiaEvaluationConfigReaderStruct extends CsvConfigRender<    MovieMidiaEvaluationConfig      >
{
	tableName = "MovieMidiaEvaluation";


    ParseCsv(csv: string[] )
    {
		let config = new MovieMidiaEvaluationConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.media_id = csvGetInt(csv,  this.GetHeadIndex(  "media_id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.zh_cn_commentators = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_commentators"  )   );
		config.min_score = csvGetFloat(csv,  this.GetHeadIndex(  "min_score"  )   );
		config.max_score = csvGetFloat(csv,  this.GetHeadIndex(  "max_score"  )   );
		config.zh_cn_content = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_content"  )   );
		config.praise =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "praise"  )   )   );
		config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );

		


		this.addConfig(config);
    }
}