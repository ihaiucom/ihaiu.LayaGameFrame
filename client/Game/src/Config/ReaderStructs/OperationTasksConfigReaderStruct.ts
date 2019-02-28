/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import OperationTasksConfig from "../ConfigExtends/OperationTasksConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class OperationTasksConfigReaderStruct extends CsvConfigRender<    OperationTasksConfig      >
{
	tableName = "OperationTasks";


    ParseCsv(csv: string[] )
    {
		let config = new OperationTasksConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.starttime = csvGetInt(csv,  this.GetHeadIndex(  "starttime"  )   );
		config.endtime = csvGetInt(csv,  this.GetHeadIndex(  "endtime"  )   );
		config.country = csvGetInt(csv,  this.GetHeadIndex(  "country"  )   );
		config.plate = csvGetInt(csv,  this.GetHeadIndex(  "plate"  )   );
		config.functionid = csvGetInt(csv,  this.GetHeadIndex(  "functionid"  )   );
		config.parameter = csvGetInt(csv,  this.GetHeadIndex(  "parameter"  )   );
		config.typename = csvGetInt(csv,  this.GetHeadIndex(  "typename"  )   );
		config.counts = csvGetInt(csv,  this.GetHeadIndex(  "counts"  )   );
		config.actors = csvGetInt(csv,  this.GetHeadIndex(  "actors"  )   );
		config.actor_nation = csvGetInt(csv,  this.GetHeadIndex(  "actor_nation"  )   );
		config.actor_sex = csvGetInt(csv,  this.GetHeadIndex(  "actor_sex"  )   );
		config.actor_type = csvGetInt(csv,  this.GetHeadIndex(  "actor_type"  )   );
		config.box_level = csvGetInt(csv,  this.GetHeadIndex(  "box_level"  )   );
		config.movie_type = csvGetInt(csv,  this.GetHeadIndex(  "movie_type"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.zh_cn_classname = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_classname"  )   );
		config.zh_cn_description = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_description"  )   );

		


		this.addConfig(config);
    }
}