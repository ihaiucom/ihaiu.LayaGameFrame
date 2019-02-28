/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BusinessConfig from "../ConfigExtends/BusinessConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class BusinessConfigReaderStruct extends CsvConfigRender<    BusinessConfig      >
{
	tableName = "Business";


    ParseCsv(csv: string[] )
    {
		let config = new BusinessConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_from = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_from"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.zh_cn_description = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_description"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );

		


		this.addConfig(config);
    }
}