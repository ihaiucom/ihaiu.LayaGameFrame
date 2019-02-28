/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import PropertyConfig from "../ConfigExtends/PropertyConfig";


export default class PropertyConfigReaderStruct extends CsvConfigRender<    PropertyConfig      >
{
	tableName = "Property";


    ParseCsv(csv: string[] )
    {
		let config = new PropertyConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.field = csvGetString(csv,  this.GetHeadIndex(  "field"  )   );
		config.enName = csvGetString(csv,  this.GetHeadIndex(  "enName"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.tip = csvGetString(csv,  this.GetHeadIndex(  "tip"  )   );

		


		this.addConfig(config);
    }
}