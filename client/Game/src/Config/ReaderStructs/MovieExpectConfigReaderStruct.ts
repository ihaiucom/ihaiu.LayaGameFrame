/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MovieExpectConfig from "../ConfigExtends/MovieExpectConfig";


export default class MovieExpectConfigReaderStruct extends CsvConfigRender<    MovieExpectConfig      >
{
	tableName = "MovieExpect";


    ParseCsv(csv: string[] )
    {
		let config = new MovieExpectConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
		config.expect_req_min = csvGetInt(csv,  this.GetHeadIndex(  "expect_req_min"  )   );
		config.expect_req_max = csvGetInt(csv,  this.GetHeadIndex(  "expect_req_max"  )   );
		config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
		config.gain_up = csvGetInt(csv,  this.GetHeadIndex(  "gain_up"  )   );
		config.zh_cn_pic_word = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_pic_word"  )   );

		


		this.addConfig(config);
    }
}