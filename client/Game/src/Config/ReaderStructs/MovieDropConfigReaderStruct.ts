/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import MovieDropConfig from "../ConfigExtends/MovieDropConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class MovieDropConfigReaderStruct extends CsvConfigRender<    MovieDropConfig      >
{
	tableName = "MovieDrop";


    ParseCsv(csv: string[] )
    {
		let config = new MovieDropConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.gain_level = csvGetInt(csv,  this.GetHeadIndex(  "gain_level"  )   );
		config.zh_cn_gain_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_gain_name"  )   );
		config.gain_pic = csvGetInt(csv,  this.GetHeadIndex(  "gain_pic"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.order_num = csvGetInt(csv,  this.GetHeadIndex(  "order_num"  )   );
		config.oreder_qua =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "oreder_qua"  )   )   );
		config.expect = csvGetInt(csv,  this.GetHeadIndex(  "expect"  )   );
		config.fixed_drop =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "fixed_drop"  )   )   );
		config.drop_num = csvGetInt(csv,  this.GetHeadIndex(  "drop_num"  )   );
		config.drop_item =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "drop_item"  )   )   );
		config.item_num =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "item_num"  )   )   );
		config.base_fans = csvGetInt(csv,  this.GetHeadIndex(  "base_fans"  )   );

		


		this.addConfig(config);
    }
}