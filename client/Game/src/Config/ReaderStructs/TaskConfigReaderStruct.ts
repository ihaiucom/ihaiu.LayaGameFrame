/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import TaskConfig from "../ConfigExtends/TaskConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class TaskConfigReaderStruct extends CsvConfigRender<    TaskConfig      >
{
	tableName = "Task";


    ParseCsv(csv: string[] )
    {
		let config = new TaskConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.unlock = csvGetInt(csv,  this.GetHeadIndex(  "unlock"  )   );
		config.require = csvGetInt(csv,  this.GetHeadIndex(  "require"  )   );
		config.goal = csvGetInt(csv,  this.GetHeadIndex(  "goal"  )   );
		config.s_goal = csvGetInt(csv,  this.GetHeadIndex(  "s_goal"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.Complete = csvGetInt(csv,  this.GetHeadIndex(  "Complete"  )   );
		config.pre_id = csvGetInt(csv,  this.GetHeadIndex(  "pre_id"  )   );
		config.guide = csvGetInt(csv,  this.GetHeadIndex(  "guide"  )   );

		


		this.addConfig(config);
    }
}