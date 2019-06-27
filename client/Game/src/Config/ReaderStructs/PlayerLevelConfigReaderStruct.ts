/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import PlayerLevelConfig from "../ConfigExtends/PlayerLevelConfig";
import DTFixItemNum from "../ConfigExtends/DTFixItemNum";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class PlayerLevelConfigReaderStruct extends CsvConfigRender<    PlayerLevelConfig      >
{
	tableName = "PlayerLevel";


    ParseCsv(csv: string[] )
    {
		let config = new PlayerLevelConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.exp = csvGetInt(csv,  this.GetHeadIndex(  "exp"  )   );
		config.reward =  DTFixItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.story =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "story"  )   )   );
		config.order_qua =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "order_qua"  )   )   );
		config.order_num = csvGetInt(csv,  this.GetHeadIndex(  "order_num"  )   );
		config.train_max = csvGetInt(csv,  this.GetHeadIndex(  "train_max"  )   );
		config.train_count = csvGetInt(csv,  this.GetHeadIndex(  "train_count"  )   );
		config.actor_max = csvGetInt(csv,  this.GetHeadIndex(  "actor_max"  )   );
		config.actor_count = csvGetInt(csv,  this.GetHeadIndex(  "actor_count"  )   );
		config.hide_max = csvGetInt(csv,  this.GetHeadIndex(  "hide_max"  )   );
		config.hide_count = csvGetInt(csv,  this.GetHeadIndex(  "hide_count"  )   );
		config.day_max = csvGetInt(csv,  this.GetHeadIndex(  "day_max"  )   );
		config.day = csvGetInt(csv,  this.GetHeadIndex(  "day"  )   );
		config.meeting_cd = csvGetInt(csv,  this.GetHeadIndex(  "meeting_cd"  )   );
		config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.mc_special_package1 =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "mc_special_package1"  )   )   );
		config.mc_special_package2 =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "mc_special_package2"  )   )   );
		config.shop_1003 = csvGetInt(csv,  this.GetHeadIndex(  "shop_1003"  )   );
		config.shop_1004 = csvGetInt(csv,  this.GetHeadIndex(  "shop_1004"  )   );
		config.Turntable_min = csvGetInt(csv,  this.GetHeadIndex(  "Turntable_min"  )   );
		config.Turntable_max = csvGetInt(csv,  this.GetHeadIndex(  "Turntable_max"  )   );

		


		this.addConfig(config);
    }
}