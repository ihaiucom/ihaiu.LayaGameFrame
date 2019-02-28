/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import SkillTriggerConfig from "../ConfigExtends/SkillTriggerConfig";


export default class SkillTriggerConfigReaderStruct extends CsvConfigRender<    SkillTriggerConfig      >
{
	tableName = "SkillTrigger";


    ParseCsv(csv: string[] )
    {
		let config = new SkillTriggerConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.trigger = csvGetInt(csv,  this.GetHeadIndex(  "trigger"  )   );
		config.value = csvGetInt(csv,  this.GetHeadIndex(  "value"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}