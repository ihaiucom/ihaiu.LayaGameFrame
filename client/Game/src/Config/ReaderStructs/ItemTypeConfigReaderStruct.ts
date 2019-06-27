/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ItemTypeConfig from "../ConfigExtends/ItemTypeConfig";


export default class ItemTypeConfigReaderStruct extends CsvConfigRender<    ItemTypeConfig      >
{
	tableName = "ItemType";


    ParseCsv(csv: string[] )
    {
		let config = new ItemTypeConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.field = csvGetString(csv,  this.GetHeadIndex(  "field"  )   );

		


		this.addConfig(config);
    }
}