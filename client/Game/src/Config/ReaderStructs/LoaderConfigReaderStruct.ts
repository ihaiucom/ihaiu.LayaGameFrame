/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import LoaderConfig from "../ConfigExtends/LoaderConfig";


export default class LoaderConfigReaderStruct extends CsvConfigRender<    LoaderConfig      >
{
	tableName = "Loader";


    ParseCsv(csv: string[] )
    {
		let config = new LoaderConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.isShowCircle = csvGetBoolean(csv,  this.GetHeadIndex(  "isShowCircle"  )   );

		


		this.addConfig(config);
    }
}