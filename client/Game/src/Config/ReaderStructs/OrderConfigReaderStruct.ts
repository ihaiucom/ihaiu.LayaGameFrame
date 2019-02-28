/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import OrderConfig from "../ConfigExtends/OrderConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class OrderConfigReaderStruct extends CsvConfigRender<    OrderConfig      >
{
	tableName = "Order";


    ParseCsv(csv: string[] )
    {
		let config = new OrderConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name1 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name1"  )   );
		config.zh_cn_name2 = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name2"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.block = csvGetInt(csv,  this.GetHeadIndex(  "block"  )   );
		config.need =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "need"  )   )   );
		config.quality = csvGetInt(csv,  this.GetHeadIndex(  "quality"  )   );
		config.reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );

		


		this.addConfig(config);
    }
}