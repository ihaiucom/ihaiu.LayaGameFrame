/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MaintaskConfig from "../ConfigExtends/MaintaskConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class MaintaskConfigReaderStruct extends CsvConfigRender<    MaintaskConfig      >
{
	tableName = "Maintask";


    ParseCsv(csv: string[] )
    {
		let config = new MaintaskConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.cn_name = csvGetString(csv,  this.GetHeadIndex(  "cn_name"  )   );
		config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
		config.trigger = csvGetInt(csv,  this.GetHeadIndex(  "trigger"  )   );
		config.t_value = csvGetInt(csv,  this.GetHeadIndex(  "t_value"  )   );
		config.require = csvGetInt(csv,  this.GetHeadIndex(  "require"  )   );
		config.r_value = csvGetInt(csv,  this.GetHeadIndex(  "r_value"  )   );
		config.s_r_value = csvGetInt(csv,  this.GetHeadIndex(  "s_r_value"  )   );
		config.goal = csvGetInt(csv,  this.GetHeadIndex(  "goal"  )   );
		config.cn_info = csvGetString(csv,  this.GetHeadIndex(  "cn_info"  )   );
		config.en_info = csvGetString(csv,  this.GetHeadIndex(  "en_info"  )   );
		config.cn_cinfo = csvGetString(csv,  this.GetHeadIndex(  "cn_cinfo"  )   );
		config.en_cinfo = csvGetString(csv,  this.GetHeadIndex(  "en_cinfo"  )   );
		config.cn_content = csvGetString(csv,  this.GetHeadIndex(  "cn_content"  )   );
		config.en_content = csvGetString(csv,  this.GetHeadIndex(  "en_content"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.pre_quest = csvGetInt(csv,  this.GetHeadIndex(  "pre_quest"  )   );
		config.guide = csvGetBoolean(csv,  this.GetHeadIndex(  "guide"  )   );
		config.guide_id = csvGetInt(csv,  this.GetHeadIndex(  "guide_id"  )   );

		


		this.addConfig(config);
    }
}