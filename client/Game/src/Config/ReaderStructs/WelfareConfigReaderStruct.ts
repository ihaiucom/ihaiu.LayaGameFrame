/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import WelfareConfig from "../ConfigExtends/WelfareConfig";


export default class WelfareConfigReaderStruct extends CsvConfigRender<    WelfareConfig      >
{
	tableName = "Welfare";


    ParseCsv(csv: string[] )
    {
		let config = new WelfareConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.icon_chosen = csvGetInt(csv,  this.GetHeadIndex(  "icon_chosen"  )   );
		config.zh_cn_activities_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_activities_name"  )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}