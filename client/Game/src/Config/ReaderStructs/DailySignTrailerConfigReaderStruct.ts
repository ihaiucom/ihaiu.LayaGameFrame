/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import DailySignTrailerConfig from "../ConfigExtends/DailySignTrailerConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class DailySignTrailerConfigReaderStruct extends CsvConfigRender<    DailySignTrailerConfig      >
{
	tableName = "DailySignTrailer";


    ParseCsv(csv: string[] )
    {
		let config = new DailySignTrailerConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.day = csvGetInt(csv,  this.GetHeadIndex(  "day"  )   );
		config.reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.zh_cn_info = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_info"  )   );

		


		this.addConfig(config);
    }
}