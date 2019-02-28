/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import WriterConfig from "../ConfigExtends/WriterConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class WriterConfigReaderStruct extends CsvConfigRender<    WriterConfig      >
{
	tableName = "Writer";


    ParseCsv(csv: string[] )
    {
		let config = new WriterConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.quality = csvGetInt(csv,  this.GetHeadIndex(  "quality"  )   );
		config.head = csvGetInt(csv,  this.GetHeadIndex(  "head"  )   );
		config.advanced_ability = csvGetInt(csv,  this.GetHeadIndex(  "advanced_ability"  )   );
		config.special_skill =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "special_skill"  )   )   );
		config.skill_level =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "skill_level"  )   )   );
		config.employee_cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "employee_cost"  )   )   );

		


		this.addConfig(config);
    }
}