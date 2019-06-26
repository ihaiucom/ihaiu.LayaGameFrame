/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActivitiesConfig from "../ConfigExtends/ActivitiesConfig";


export default class ActivitiesConfigReaderStruct extends CsvConfigRender<    ActivitiesConfig      >
{
	tableName = "Activities";


    ParseCsv(csv: string[] )
    {
		let config = new ActivitiesConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.startType = csvGetInt(csv,  this.GetHeadIndex(  "startType"  )   );
		config.levelReq = csvGetInt(csv,  this.GetHeadIndex(  "levelReq"  )   );
		config.blockReq = csvGetInt(csv,  this.GetHeadIndex(  "blockReq"  )   );
		config.start = csvGetInt(csv,  this.GetHeadIndex(  "start"  )   );
		config.duration = csvGetInt(csv,  this.GetHeadIndex(  "duration"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.iconChosen = csvGetInt(csv,  this.GetHeadIndex(  "iconChosen"  )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}