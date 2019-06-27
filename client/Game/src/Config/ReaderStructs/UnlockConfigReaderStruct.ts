/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import UnlockConfig from "../ConfigExtends/UnlockConfig";


export default class UnlockConfigReaderStruct extends CsvConfigRender<    UnlockConfig      >
{
	tableName = "Unlock";


    ParseCsv(csv: string[] )
    {
		let config = new UnlockConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.icon_type = csvGetInt(csv,  this.GetHeadIndex(  "icon_type"  )   );
		config.menu_id = csvGetInt(csv,  this.GetHeadIndex(  "menu_id"  )   );
		config.item_id = csvGetInt(csv,  this.GetHeadIndex(  "item_id"  )   );
		config.show_type = csvGetInt(csv,  this.GetHeadIndex(  "show_type"  )   );
		config.group = csvGetInt(csv,  this.GetHeadIndex(  "group"  )   );
		config.group_id = csvGetInt(csv,  this.GetHeadIndex(  "group_id"  )   );
		config.position = csvGetInt(csv,  this.GetHeadIndex(  "position"  )   );
		config.open_type = csvGetInt(csv,  this.GetHeadIndex(  "open_type"  )   );
		config.open_data = csvGetInt(csv,  this.GetHeadIndex(  "open_data"  )   );
		config.open_show =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "open_show"  )   )   );
		config.plot = csvGetInt(csv,  this.GetHeadIndex(  "plot"  )   );
		config.time = csvGetInt(csv,  this.GetHeadIndex(  "time"  )   );
		config.close_type = csvGetInt(csv,  this.GetHeadIndex(  "close_type"  )   );
		config.close_data = csvGetInt(csv,  this.GetHeadIndex(  "close_data"  )   );
		config.continue = csvGetInt(csv,  this.GetHeadIndex(  "continue"  )   );
		config.is_new = csvGetBoolean(csv,  this.GetHeadIndex(  "is_new"  )   );
		config.zh_cn_touch_txt = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_touch_txt"  )   );

		


		this.addConfig(config);
    }
}