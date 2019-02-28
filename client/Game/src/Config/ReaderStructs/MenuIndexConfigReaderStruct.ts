/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MenuIndexConfig from "../ConfigExtends/MenuIndexConfig";


export default class MenuIndexConfigReaderStruct extends CsvConfigRender<    MenuIndexConfig      >
{
	tableName = "MenuIndex";


    ParseCsv(csv: string[] )
    {
		let config = new MenuIndexConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.menuId = csvGetInt(csv,  this.GetHeadIndex(  "menuId"  )   );
		config.openType = csvGetInt(csv,  this.GetHeadIndex(  "openType"  )   );
		config.menuIndex = csvGetInt(csv,  this.GetHeadIndex(  "menuIndex"  )   );

		


		this.addConfig(config);
    }
}