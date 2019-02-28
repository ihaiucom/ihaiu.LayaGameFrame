/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import FloorConfig from "../ConfigExtends/FloorConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class FloorConfigReaderStruct extends CsvConfigRender<    FloorConfig      >
{
	tableName = "Floor";


    ParseCsv(csv: string[] )
    {
		let config = new FloorConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.level_req = csvGetInt(csv,  this.GetHeadIndex(  "level_req"  )   );
		config.city_req = csvGetInt(csv,  this.GetHeadIndex(  "city_req"  )   );

		


		this.addConfig(config);
    }
}