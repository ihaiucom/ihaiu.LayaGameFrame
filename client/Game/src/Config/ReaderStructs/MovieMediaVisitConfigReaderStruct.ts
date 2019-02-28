/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MovieMediaVisitConfig from "../ConfigExtends/MovieMediaVisitConfig";


export default class MovieMediaVisitConfigReaderStruct extends CsvConfigRender<    MovieMediaVisitConfig      >
{
	tableName = "MovieMediaVisit";


    ParseCsv(csv: string[] )
    {
		let config = new MovieMediaVisitConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.mediaId = csvGetInt(csv,  this.GetHeadIndex(  "mediaId"  )   );
		config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.levelup_req = csvGetInt(csv,  this.GetHeadIndex(  "levelup_req"  )   );
		config.cost_id = csvGetInt(csv,  this.GetHeadIndex(  "cost_id"  )   );
		config.cost_num = csvGetInt(csv,  this.GetHeadIndex(  "cost_num"  )   );
		config.min_expection = csvGetInt(csv,  this.GetHeadIndex(  "min_expection"  )   );
		config.max_expection = csvGetInt(csv,  this.GetHeadIndex(  "max_expection"  )   );
		config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );

		


		this.addConfig(config);
    }
}