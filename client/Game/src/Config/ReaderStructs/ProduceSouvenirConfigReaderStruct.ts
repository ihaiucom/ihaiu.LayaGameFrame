/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ProduceSouvenirConfig from "../ConfigExtends/ProduceSouvenirConfig";


export default class ProduceSouvenirConfigReaderStruct extends CsvConfigRender<    ProduceSouvenirConfig      >
{
	tableName = "ProduceSouvenir";


    ParseCsv(csv: string[] )
    {
		let config = new ProduceSouvenirConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.once = csvGetInt(csv,  this.GetHeadIndex(  "once"  )   );
		config.max = csvGetInt(csv,  this.GetHeadIndex(  "max"  )   );

		


		this.addConfig(config);
    }
}