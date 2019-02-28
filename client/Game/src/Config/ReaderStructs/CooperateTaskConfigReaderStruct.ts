/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import CooperateTaskConfig from "../ConfigExtends/CooperateTaskConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class CooperateTaskConfigReaderStruct extends CsvConfigRender<    CooperateTaskConfig      >
{
	tableName = "CooperateTask";


    ParseCsv(csv: string[] )
    {
		let config = new CooperateTaskConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.task_name = csvGetString(csv,  this.GetHeadIndex(  "task_name"  )   );
		config.task_star = csvGetInt(csv,  this.GetHeadIndex(  "task_star"  )   );
		config.task_type = csvGetInt(csv,  this.GetHeadIndex(  "task_type"  )   );
		config.parameter1 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter1"  )   )   );
		config.parameter2 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter2"  )   )   );
		config.parameter3 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter3"  )   )   );
		config.parameter4 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter4"  )   )   );
		config.parameter5 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "parameter5"  )   )   );
		config.reward_id =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward_id"  )   )   );

		


		this.addConfig(config);
    }
}