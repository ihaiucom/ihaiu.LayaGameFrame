/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MaintaskConfig from "../ConfigExtends/MaintaskConfig";


export default class MaintaskConfigReaderStruct extends CsvConfigRender<    MaintaskConfig      >
{
	tableName = "Maintask";


    ParseCsv(csv: string[] )
    {
		let config = new MaintaskConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
		config.next_id = csvGetInt(csv,  this.GetHeadIndex(  "next_id"  )   );
		config.require = csvGetInt(csv,  this.GetHeadIndex(  "require"  )   );
		config.r_value = csvGetInt(csv,  this.GetHeadIndex(  "r_value"  )   );
		config.s_r_value = csvGetInt(csv,  this.GetHeadIndex(  "s_r_value"  )   );
		config.zh_cn_info = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_info"  )   );
		config.reward = csvGetInt(csv,  this.GetHeadIndex(  "reward"  )   );
		config.pre_quest = csvGetInt(csv,  this.GetHeadIndex(  "pre_quest"  )   );
		config.plot = csvGetBoolean(csv,  this.GetHeadIndex(  "plot"  )   );
		config.UI = csvGetInt(csv,  this.GetHeadIndex(  "UI"  )   );
		config.finger = csvGetBoolean(csv,  this.GetHeadIndex(  "finger"  )   );
		config.finger_postion = csvGetString(csv,  this.GetHeadIndex(  "finger_postion"  )   );
		config.halo = csvGetBoolean(csv,  this.GetHeadIndex(  "halo"  )   );
		config.halo_postion = csvGetString(csv,  this.GetHeadIndex(  "halo_postion"  )   );

		


		this.addConfig(config);
    }
}