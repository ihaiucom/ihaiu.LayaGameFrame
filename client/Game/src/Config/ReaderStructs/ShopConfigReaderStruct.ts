/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ShopConfig from "../ConfigExtends/ShopConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class ShopConfigReaderStruct extends CsvConfigRender<    ShopConfig      >
{
	tableName = "Shop";


    ParseCsv(csv: string[] )
    {
		let config = new ShopConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.item =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "item"  )   )   );
		config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.period = csvGetString(csv,  this.GetHeadIndex(  "period"  )   );
		config.limit =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "limit"  )   )   );
		config.special = csvGetInt(csv,  this.GetHeadIndex(  "special"  )   );
		config.delay = csvGetInt(csv,  this.GetHeadIndex(  "delay"  )   );

		


		this.addConfig(config);
    }
}