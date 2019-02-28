/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ProduceLvConfig from "../ConfigExtends/ProduceLvConfig";


export default class ProduceLvConfigReaderStruct extends CsvConfigRender<    ProduceLvConfig      >
{
	tableName = "ProduceLv";


    ParseCsv(csv: string[] )
    {
		let config = new ProduceLvConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
		config.effect =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "effect"  )   )   );
		config.produce_lv = csvGetInt(csv,  this.GetHeadIndex(  "produce_lv"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}