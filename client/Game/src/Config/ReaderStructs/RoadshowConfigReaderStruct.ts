/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import RoadshowConfig from "../ConfigExtends/RoadshowConfig";


export default class RoadshowConfigReaderStruct extends CsvConfigRender<    RoadshowConfig      >
{
	tableName = "Roadshow";


    ParseCsv(csv: string[] )
    {
		let config = new RoadshowConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.compere_type = csvGetInt(csv,  this.GetHeadIndex(  "compere_type"  )   );
		config.content = csvGetString(csv,  this.GetHeadIndex(  "content"  )   );
		config.remaks = csvGetString(csv,  this.GetHeadIndex(  "remaks"  )   );
		config.content_duration = csvGetInt(csv,  this.GetHeadIndex(  "content_duration"  )   );
		config.act = csvGetString(csv,  this.GetHeadIndex(  "act"  )   );
		config.act_duration = csvGetInt(csv,  this.GetHeadIndex(  "act_duration"  )   );

		


		this.addConfig(config);
    }
}