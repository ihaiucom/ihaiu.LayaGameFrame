/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import CountryConfig from "../ConfigExtends/CountryConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class CountryConfigReaderStruct extends CsvConfigRender<    CountryConfig      >
{
	tableName = "Country";


    ParseCsv(csv: string[] )
    {
		let config = new CountryConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.number = csvGetInt(csv,  this.GetHeadIndex(  "number"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
		config.city_num = csvGetInt(csv,  this.GetHeadIndex(  "city_num"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.flag = csvGetInt(csv,  this.GetHeadIndex(  "flag"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.pre_id = csvGetInt(csv,  this.GetHeadIndex(  "pre_id"  )   );
		config.next_country = csvGetInt(csv,  this.GetHeadIndex(  "next_country"  )   );

		


		this.addConfig(config);
    }
}