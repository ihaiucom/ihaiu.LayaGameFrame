/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import CompleteConfig from "../ConfigExtends/CompleteConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class CompleteConfigReaderStruct extends CsvConfigRender<    CompleteConfig      >
{
	tableName = "Complete";


    ParseCsv(csv: string[] )
    {
		let config = new CompleteConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.module = csvGetString(csv,  this.GetHeadIndex(  "module"  )   );
		config.completion = csvGetInt(csv,  this.GetHeadIndex(  "completion"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );

		


		this.addConfig(config);
    }
}