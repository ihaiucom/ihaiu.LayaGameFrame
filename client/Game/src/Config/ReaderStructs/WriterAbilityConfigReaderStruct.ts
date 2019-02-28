/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import WriterAbilityConfig from "../ConfigExtends/WriterAbilityConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class WriterAbilityConfigReaderStruct extends CsvConfigRender<    WriterAbilityConfig      >
{
	tableName = "WriterAbility";


    ParseCsv(csv: string[] )
    {
		let config = new WriterAbilityConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.advanced_level = csvGetInt(csv,  this.GetHeadIndex(  "advanced_level"  )   );
		config.increase = csvGetInt(csv,  this.GetHeadIndex(  "increase"  )   );
		config.train_time = csvGetInt(csv,  this.GetHeadIndex(  "train_time"  )   );
		config.train_cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "train_cost"  )   )   );

		


		this.addConfig(config);
    }
}