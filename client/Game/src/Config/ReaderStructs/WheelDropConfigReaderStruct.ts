/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import WheelDropConfig from "../ConfigExtends/WheelDropConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class WheelDropConfigReaderStruct extends CsvConfigRender<    WheelDropConfig      >
{
	tableName = "WheelDrop";


    ParseCsv(csv: string[] )
    {
		let config = new WheelDropConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.wheel_type = csvGetInt(csv,  this.GetHeadIndex(  "wheel_type"  )   );
		config.priority = csvGetInt(csv,  this.GetHeadIndex(  "priority"  )   );
		config.drop_item =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "drop_item"  )   )   );
		config.label_id = csvGetInt(csv,  this.GetHeadIndex(  "label_id"  )   );
		config.weight = csvGetInt(csv,  this.GetHeadIndex(  "weight"  )   );

		


		this.addConfig(config);
    }
}