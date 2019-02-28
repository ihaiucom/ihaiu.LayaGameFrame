/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import WriterSkillConfig from "../ConfigExtends/WriterSkillConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class WriterSkillConfigReaderStruct extends CsvConfigRender<    WriterSkillConfig      >
{
	tableName = "WriterSkill";


    ParseCsv(csv: string[] )
    {
		let config = new WriterSkillConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.skill_level = csvGetInt(csv,  this.GetHeadIndex(  "skill_level"  )   );
		config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.req_level = csvGetInt(csv,  this.GetHeadIndex(  "req_level"  )   );
		config.label =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "label"  )   )   );

		


		this.addConfig(config);
    }
}