/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MenuConfig from "../ConfigExtends/MenuConfig";


export default class MenuConfigReaderStruct extends CsvConfigRender<    MenuConfig      >
{
	tableName = "Menu";


    ParseCsv(csv: string[] )
    {
		let config = new MenuConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.icon = csvGetString(csv,  this.GetHeadIndex(  "icon"  )   );
		config.moduleName = csvGetString(csv,  this.GetHeadIndex(  "moduleName"  )   );
		config.layer = csvGetInt(csv,  this.GetHeadIndex(  "layer"  )   );
		config.closeOtherType = csvGetInt(csv,  this.GetHeadIndex(  "closeOtherType"  )   );
		config.closeHomeWindow = csvGetBoolean(csv,  this.GetHeadIndex(  "closeHomeWindow"  )   );
		config.isAutoOpenHomeWindow = csvGetBoolean(csv,  this.GetHeadIndex(  "isAutoOpenHomeWindow"  )   );
		config.cacheTime = csvGetInt(csv,  this.GetHeadIndex(  "cacheTime"  )   );
		config.loaderId = csvGetInt(csv,  this.GetHeadIndex(  "loaderId"  )   );
		config.barType = csvGetInt(csv,  this.GetHeadIndex(  "barType"  )   );
		config.barIndex = csvGetInt(csv,  this.GetHeadIndex(  "barIndex"  )   );
		config.openAnimation = csvGetInt(csv,  this.GetHeadIndex(  "openAnimation"  )   );
		config.closeAnimation = csvGetInt(csv,  this.GetHeadIndex(  "closeAnimation"  )   );

		


		this.addConfig(config);
    }
}