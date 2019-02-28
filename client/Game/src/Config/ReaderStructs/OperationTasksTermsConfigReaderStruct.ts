/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import OperationTasksTermsConfig from "../ConfigExtends/OperationTasksTermsConfig";


export default class OperationTasksTermsConfigReaderStruct extends CsvConfigRender<    OperationTasksTermsConfig      >
{
	tableName = "OperationTasksTerms";


    ParseCsv(csv: string[] )
    {
		let config = new OperationTasksTermsConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.counts = csvGetInt(csv,  this.GetHeadIndex(  "counts"  )   );
		config.actors = csvGetInt(csv,  this.GetHeadIndex(  "actors"  )   );
		config.actor_nation = csvGetInt(csv,  this.GetHeadIndex(  "actor_nation"  )   );
		config.actor_sex = csvGetInt(csv,  this.GetHeadIndex(  "actor_sex"  )   );
		config.actor_type = csvGetInt(csv,  this.GetHeadIndex(  "actor_type"  )   );
		config.box_level = csvGetInt(csv,  this.GetHeadIndex(  "box_level"  )   );
		config.movie_type = csvGetInt(csv,  this.GetHeadIndex(  "movie_type"  )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}