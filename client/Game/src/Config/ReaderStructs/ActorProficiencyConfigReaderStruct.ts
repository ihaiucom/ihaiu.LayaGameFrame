/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorProficiencyConfig from "../ConfigExtends/ActorProficiencyConfig";
import DTProficiency from "../ConfigExtends/DTProficiency";


export default class ActorProficiencyConfigReaderStruct extends CsvConfigRender<    ActorProficiencyConfig      >
{
	tableName = "ActorProficiency";


    ParseCsv(csv: string[] )
    {
		let config = new ActorProficiencyConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.shoot_type = csvGetInt(csv,  this.GetHeadIndex(  "shoot_type"  )   );
		config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
		config.shoot_exp = csvGetInt(csv,  this.GetHeadIndex(  "shoot_exp"  )   );
		config.exp = csvGetInt(csv,  this.GetHeadIndex(  "exp"  )   );
		config.proficiency =  DTProficiency.parse(       csvGetString(csv,  this.GetHeadIndex(  "proficiency"  )   )   );

		


		this.addConfig(config);
    }
}