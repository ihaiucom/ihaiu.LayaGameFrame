/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import OperationTasksScoreConfig from "../ConfigExtends/OperationTasksScoreConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class OperationTasksScoreConfigReaderStruct extends CsvConfigRender<    OperationTasksScoreConfig      >
{
	tableName = "OperationTasksScore";


    ParseCsv(csv: string[] )
    {
		let config = new OperationTasksScoreConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.score = csvGetInt(csv,  this.GetHeadIndex(  "score"  )   );
		config.rewards =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "rewards"  )   )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}