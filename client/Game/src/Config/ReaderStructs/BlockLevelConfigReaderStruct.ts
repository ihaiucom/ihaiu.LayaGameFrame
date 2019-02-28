/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BlockLevelConfig from "../ConfigExtends/BlockLevelConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class BlockLevelConfigReaderStruct extends CsvConfigRender<    BlockLevelConfig      >
{
	tableName = "BlockLevel";


    ParseCsv(csv: string[] )
    {
		let config = new BlockLevelConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
		config.upgrade_req = csvGetInt(csv,  this.GetHeadIndex(  "upgrade_req"  )   );
		config.upgrade_menu =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "upgrade_menu"  )   )   );
		config.upgrade_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "upgrade_reward"  )   )   );
		config.daily_reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "daily_reward"  )   )   );
		config.cinema =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "cinema"  )   )   );
		config.storysearchcost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "storysearchcost"  )   )   );
		config.storysearchdollar = csvGetInt(csv,  this.GetHeadIndex(  "storysearchdollar"  )   );
		config.level_multiple = csvGetInt(csv,  this.GetHeadIndex(  "level_multiple"  )   );
		config.level_con = csvGetInt(csv,  this.GetHeadIndex(  "level_con"  )   );
		config.theater_level_con = csvGetInt(csv,  this.GetHeadIndex(  "theater_level_con"  )   );
		config.good = csvGetInt(csv,  this.GetHeadIndex(  "good"  )   );
		config.big_sell = csvGetInt(csv,  this.GetHeadIndex(  "big_sell"  )   );
		config.great_sell = csvGetInt(csv,  this.GetHeadIndex(  "great_sell"  )   );
		config.myth_sell = csvGetInt(csv,  this.GetHeadIndex(  "myth_sell"  )   );
		config.marvel_sell = csvGetInt(csv,  this.GetHeadIndex(  "marvel_sell"  )   );
		config.zh_cn_current_msg =  toStringArray(       csvGetString(csv,  this.GetHeadIndex(  "zh_cn_current_msg"  )   )   );
		config.zh_cn_next_msg =  toStringArray(       csvGetString(csv,  this.GetHeadIndex(  "zh_cn_next_msg"  )   )   );
		config.movie_daily_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "movie_daily_reward"  )   )   );
		config.task_cd = csvGetInt(csv,  this.GetHeadIndex(  "task_cd"  )   );
		config.city_gold = csvGetInt(csv,  this.GetHeadIndex(  "city_gold"  )   );
		config.city_fans = csvGetInt(csv,  this.GetHeadIndex(  "city_fans"  )   );
		config.party_guest = csvGetInt(csv,  this.GetHeadIndex(  "party_guest"  )   );
		config.story_num = csvGetInt(csv,  this.GetHeadIndex(  "story_num"  )   );
		config.city_envoy_max = csvGetInt(csv,  this.GetHeadIndex(  "city_envoy_max"  )   );
		config.finance_exchange = csvGetInt(csv,  this.GetHeadIndex(  "finance_exchange"  )   );
		config.actor_max = csvGetInt(csv,  this.GetHeadIndex(  "actor_max"  )   );
		config.certificate = csvGetInt(csv,  this.GetHeadIndex(  "certificate"  )   );
		config.sequel_max = csvGetInt(csv,  this.GetHeadIndex(  "sequel_max"  )   );
		config.screenwriter_max = csvGetInt(csv,  this.GetHeadIndex(  "screenwriter_max"  )   );
		config.story_refresh_times = csvGetInt(csv,  this.GetHeadIndex(  "story_refresh_times"  )   );
		config.box_target1 = csvGetInt(csv,  this.GetHeadIndex(  "box_target1"  )   );
		config.box_target1_reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "box_target1_reward"  )   )   );
		config.box_target2 = csvGetInt(csv,  this.GetHeadIndex(  "box_target2"  )   );
		config.box_target2_reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "box_target2_reward"  )   )   );
		config.box_target3 = csvGetInt(csv,  this.GetHeadIndex(  "box_target3"  )   );
		config.box_target3_reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "box_target3_reward"  )   )   );
		config.box_target_all = csvGetInt(csv,  this.GetHeadIndex(  "box_target_all"  )   );
		config.box_target_all_reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "box_target_all_reward"  )   )   );
		config.new_effect = csvGetBoolean(csv,  this.GetHeadIndex(  "new_effect"  )   );
		config.zh_cn_name_tips = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name_tips"  )   );

		


		this.addConfig(config);
    }
}