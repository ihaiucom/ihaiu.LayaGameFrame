/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ItemConfig from "../ConfigExtends/ItemConfig";


export default class ItemConfigReaderStruct extends CsvConfigRender<    ItemConfig      >
{
	tableName = "Item";


    ParseCsv(csv: string[] )
    {
		let config = new ItemConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.zh_cn_item_des = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_item_des"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.star = csvGetInt(csv,  this.GetHeadIndex(  "star"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.max_num = csvGetInt(csv,  this.GetHeadIndex(  "max_num"  )   );
		config.get_way =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "get_way"  )   )   );
		config.rewardid = csvGetInt(csv,  this.GetHeadIndex(  "rewardid"  )   );
		config.can_sell = csvGetBoolean(csv,  this.GetHeadIndex(  "can_sell"  )   );
		config.price = csvGetInt(csv,  this.GetHeadIndex(  "price"  )   );
		config.syn_id = csvGetInt(csv,  this.GetHeadIndex(  "syn_id"  )   );
		config.actor_id = csvGetInt(csv,  this.GetHeadIndex(  "actor_id"  )   );
		config.actor_num = csvGetInt(csv,  this.GetHeadIndex(  "actor_num"  )   );
		config.zh_cn_get_way_explain = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_get_way_explain"  )   );
		config.User_item_info = csvGetInt(csv,  this.GetHeadIndex(  "User_item_info"  )   );

		


		this.addConfig(config);
    }
}