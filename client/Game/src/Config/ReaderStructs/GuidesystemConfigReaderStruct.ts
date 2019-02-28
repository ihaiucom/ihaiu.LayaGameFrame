/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import GuidesystemConfig from "../ConfigExtends/GuidesystemConfig";
import DTVector2 from "../ConfigExtends/DTVector2";


export default class GuidesystemConfigReaderStruct extends CsvConfigRender<    GuidesystemConfig      >
{
	tableName = "Guidesystem";


    ParseCsv(csv: string[] )
    {
		let config = new GuidesystemConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.group = csvGetInt(csv,  this.GetHeadIndex(  "group"  )   );
		config.order = csvGetInt(csv,  this.GetHeadIndex(  "order"  )   );
		config.finish_type = csvGetInt(csv,  this.GetHeadIndex(  "finish_type"  )   );
		config.finish_value_1 = csvGetInt(csv,  this.GetHeadIndex(  "finish_value_1"  )   );
		config.finish_value_2 = csvGetInt(csv,  this.GetHeadIndex(  "finish_value_2"  )   );
		config.trigger_type = csvGetInt(csv,  this.GetHeadIndex(  "trigger_type"  )   );
		config.trigger_value = csvGetInt(csv,  this.GetHeadIndex(  "trigger_value"  )   );
		config.break_guide = csvGetInt(csv,  this.GetHeadIndex(  "break_guide"  )   );
		config.next_guide = csvGetInt(csv,  this.GetHeadIndex(  "next_guide"  )   );
		config.path_id = csvGetInt(csv,  this.GetHeadIndex(  "path_id"  )   );
		config.path_par1 = csvGetInt(csv,  this.GetHeadIndex(  "path_par1"  )   );
		config.assistant = csvGetBoolean(csv,  this.GetHeadIndex(  "assistant"  )   );
		config.position =  DTVector2.parse(       csvGetString(csv,  this.GetHeadIndex(  "position"  )   )   );
		config.cn_content = csvGetString(csv,  this.GetHeadIndex(  "cn_content"  )   );
		config.en_content = csvGetString(csv,  this.GetHeadIndex(  "en_content"  )   );
		config.f_direction = csvGetInt(csv,  this.GetHeadIndex(  "f_direction"  )   );
		config.halo = csvGetBoolean(csv,  this.GetHeadIndex(  "halo"  )   );
		config.radius = csvGetInt(csv,  this.GetHeadIndex(  "radius"  )   );
		config.storyline = csvGetBoolean(csv,  this.GetHeadIndex(  "storyline"  )   );
		config.storyline_id = csvGetInt(csv,  this.GetHeadIndex(  "storyline_id"  )   );
		config.force = csvGetBoolean(csv,  this.GetHeadIndex(  "force"  )   );
		config.stay = csvGetBoolean(csv,  this.GetHeadIndex(  "stay"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
		config.tips2 = csvGetString(csv,  this.GetHeadIndex(  "tips2"  )   );

		


		this.addConfig(config);
    }
}