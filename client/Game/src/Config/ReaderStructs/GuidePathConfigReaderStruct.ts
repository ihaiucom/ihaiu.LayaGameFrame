/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import GuidePathConfig from "../ConfigExtends/GuidePathConfig";


export default class GuidePathConfigReaderStruct extends CsvConfigRender<    GuidePathConfig      >
{
	tableName = "GuidePath";


    ParseCsv(csv: string[] )
    {
		let config = new GuidePathConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.find_ui_type = csvGetInt(csv,  this.GetHeadIndex(  "find_ui_type"  )   );
		config.menuid = csvGetInt(csv,  this.GetHeadIndex(  "menuid"  )   );
		config.path = csvGetString(csv,  this.GetHeadIndex(  "path"  )   );
		config.list_path = csvGetString(csv,  this.GetHeadIndex(  "list_path"  )   );
		config.sub_id = csvGetInt(csv,  this.GetHeadIndex(  "sub_id"  )   );
		config.list_index = csvGetInt(csv,  this.GetHeadIndex(  "list_index"  )   );
		config.add_btn = csvGetInt(csv,  this.GetHeadIndex(  "add_btn"  )   );
		config.tip = csvGetString(csv,  this.GetHeadIndex(  "tip"  )   );

		


		this.addConfig(config);
    }
}