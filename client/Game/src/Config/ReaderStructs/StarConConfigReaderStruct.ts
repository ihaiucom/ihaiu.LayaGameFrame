/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StarConConfig from "../ConfigExtends/StarConConfig";


export default class StarConConfigReaderStruct extends CsvConfigRender<    StarConConfig      >
{
	tableName = "StarCon";


    ParseCsv(csv: string[] )
    {
		let config = new StarConConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.story_star_con = csvGetInt(csv,  this.GetHeadIndex(  "story_star_con"  )   );
		config.att_con = csvGetInt(csv,  this.GetHeadIndex(  "att_con"  )   );
		config.count = csvGetInt(csv,  this.GetHeadIndex(  "count"  )   );
		config.evaluate_protect = csvGetInt(csv,  this.GetHeadIndex(  "evaluate_protect"  )   );
		config.opinions_protect = csvGetInt(csv,  this.GetHeadIndex(  "opinions_protect"  )   );

		


		this.addConfig(config);
    }
}