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
		config.field = csvGetString(csv,  this.GetHeadIndex(  "field"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.zh_cn_addname = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_addname"  )   );
		config.addnamenum = csvGetInt(csv,  this.GetHeadIndex(  "addnamenum"  )   );
		config.details = csvGetBoolean(csv,  this.GetHeadIndex(  "details"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.groupType = csvGetInt(csv,  this.GetHeadIndex(  "groupType"  )   );
		config.visible = csvGetBoolean(csv,  this.GetHeadIndex(  "visible"  )   );

		


		this.addConfig(config);
    }
}