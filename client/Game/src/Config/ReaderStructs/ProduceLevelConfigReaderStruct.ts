/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ProduceLevelConfig from "../ConfigExtends/ProduceLevelConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class ProduceLevelConfigReaderStruct extends CsvConfigRender<    ProduceLevelConfig      >
{
	tableName = "ProduceLevel";


    ParseCsv(csv: string[] )
    {
		let config = new ProduceLevelConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.limit_grade =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "limit_grade"  )   )   );

		


		this.addConfig(config);
    }
}