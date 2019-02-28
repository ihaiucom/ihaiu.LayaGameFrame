/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StorylineConfig from "../ConfigExtends/StorylineConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class StorylineConfigReaderStruct extends CsvConfigRender<    StorylineConfig      >
{
	tableName = "Storyline";


    ParseCsv(csv: string[] )
    {
		let config = new StorylineConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.trigger = csvGetInt(csv,  this.GetHeadIndex(  "trigger"  )   );
		config.value = csvGetInt(csv,  this.GetHeadIndex(  "value"  )   );
		config.guide_type = csvGetInt(csv,  this.GetHeadIndex(  "guide_type"  )   );
		config.guide_id = csvGetInt(csv,  this.GetHeadIndex(  "guide_id"  )   );
		config.group = csvGetInt(csv,  this.GetHeadIndex(  "group"  )   );
		config.order = csvGetInt(csv,  this.GetHeadIndex(  "order"  )   );
		config.type_id = csvGetString(csv,  this.GetHeadIndex(  "type_id"  )   );
		config.ui_type = csvGetInt(csv,  this.GetHeadIndex(  "ui_type"  )   );
		config.cn_ui_content = csvGetString(csv,  this.GetHeadIndex(  "cn_ui_content"  )   );
		config.en_ui_content = csvGetString(csv,  this.GetHeadIndex(  "en_ui_content"  )   );
		config.cn_content = csvGetString(csv,  this.GetHeadIndex(  "cn_content"  )   );
		config.en_content = csvGetString(csv,  this.GetHeadIndex(  "en_content"  )   );
		config.cn_name = csvGetString(csv,  this.GetHeadIndex(  "cn_name"  )   );
		config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
		config.anchor = csvGetInt(csv,  this.GetHeadIndex(  "anchor"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );

		


		this.addConfig(config);
    }
}