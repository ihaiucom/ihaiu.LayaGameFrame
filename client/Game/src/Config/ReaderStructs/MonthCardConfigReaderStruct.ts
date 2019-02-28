/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MonthCardConfig from "../ConfigExtends/MonthCardConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class MonthCardConfigReaderStruct extends CsvConfigRender<    MonthCardConfig      >
{
	tableName = "MonthCard";


    ParseCsv(csv: string[] )
    {
		let config = new MonthCardConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.serial = csvGetInt(csv,  this.GetHeadIndex(  "serial"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.actor = csvGetInt(csv,  this.GetHeadIndex(  "actor"  )   );
		config.daily_gift_resource =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "daily_gift_resource"  )   )   );
		config.daily_gift_contract1 =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "daily_gift_contract1"  )   )   );
		config.daily_gift_contract2 =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "daily_gift_contract2"  )   )   );
		config.gift_crystal =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "gift_crystal"  )   )   );
		config.gift_item =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "gift_item"  )   )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}