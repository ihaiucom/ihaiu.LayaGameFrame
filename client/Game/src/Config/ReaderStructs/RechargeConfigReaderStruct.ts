/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import RechargeConfig from "../ConfigExtends/RechargeConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class RechargeConfigReaderStruct extends CsvConfigRender<    RechargeConfig      >
{
	tableName = "Recharge";


    ParseCsv(csv: string[] )
    {
		let config = new RechargeConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.product_name = csvGetString(csv,  this.GetHeadIndex(  "product_name"  )   );
		config.product_id = csvGetString(csv,  this.GetHeadIndex(  "product_id"  )   );
		config.cost_dollar = csvGetFloat(csv,  this.GetHeadIndex(  "cost_dollar"  )   );
		config.item =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "item"  )   )   );
		config.gift =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "gift"  )   )   );
		config.double = csvGetInt(csv,  this.GetHeadIndex(  "double"  )   );
		config.go = csvGetInt(csv,  this.GetHeadIndex(  "go"  )   );
		config.term = csvGetInt(csv,  this.GetHeadIndex(  "term"  )   );
		config.is_show = csvGetBoolean(csv,  this.GetHeadIndex(  "is_show"  )   );
		config.limit =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "limit"  )   )   );

		


		this.addConfig(config);
    }
}