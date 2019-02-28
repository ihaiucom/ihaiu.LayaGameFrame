/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ProduceConfig from "../ConfigExtends/ProduceConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class ProduceConfigReaderStruct extends CsvConfigRender<    ProduceConfig      >
{
	tableName = "Produce";


    ParseCsv(csv: string[] )
    {
		let config = new ProduceConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.item = csvGetInt(csv,  this.GetHeadIndex(  "item"  )   );
		config.zh_cn_tip = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_tip"  )   );
		config.grade = csvGetInt(csv,  this.GetHeadIndex(  "grade"  )   );
		config.unlock_level = csvGetInt(csv,  this.GetHeadIndex(  "unlock_level"  )   );
		config.unlock_building = csvGetInt(csv,  this.GetHeadIndex(  "unlock_building"  )   );
		config.unlock_gold =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "unlock_gold"  )   )   );
		config.unlock_reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "unlock_reward"  )   )   );
		config.cd = csvGetInt(csv,  this.GetHeadIndex(  "cd"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.cheer_sex = csvGetInt(csv,  this.GetHeadIndex(  "cheer_sex"  )   );
		config.cheer_continents = csvGetInt(csv,  this.GetHeadIndex(  "cheer_continents"  )   );
		config.cheer_type = csvGetInt(csv,  this.GetHeadIndex(  "cheer_type"  )   );
		config.cheer_age = csvGetInt(csv,  this.GetHeadIndex(  "cheer_age"  )   );
		config.pre_id = csvGetInt(csv,  this.GetHeadIndex(  "pre_id"  )   );
		config.next_line = csvGetInt(csv,  this.GetHeadIndex(  "next_line"  )   );

		


		this.addConfig(config);
    }
}