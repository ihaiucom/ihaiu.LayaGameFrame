/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import LoadingConfig from "../ConfigExtends/LoadingConfig";


export default class LoadingConfigReaderStruct extends CsvConfigRender<    LoadingConfig      >
{
	tableName = "Loading";


    ParseCsv(csv: string[] )
    {
		let config = new LoadingConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.text = csvGetString(csv,  this.GetHeadIndex(  "text"  )   );

		


		this.addConfig(config);
    }
}