/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import SettingDefaultConfig from "../ConfigExtends/SettingDefaultConfig";


export default class SettingDefaultConfigReaderStruct extends CsvConfigRender<    SettingDefaultConfig      >
{
	tableName = "SettingDefault";


    ParseCsv(csv: string[] )
    {
		let config = new SettingDefaultConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.default = csvGetInt(csv,  this.GetHeadIndex(  "default"  )   );
		config.switch = csvGetBoolean(csv,  this.GetHeadIndex(  "switch"  )   );
		config.popup = csvGetString(csv,  this.GetHeadIndex(  "popup"  )   );

		


		this.addConfig(config);
    }
}