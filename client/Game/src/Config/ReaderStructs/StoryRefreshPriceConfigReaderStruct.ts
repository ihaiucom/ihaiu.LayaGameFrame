/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryRefreshPriceConfig from "../ConfigExtends/StoryRefreshPriceConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class StoryRefreshPriceConfigReaderStruct extends CsvConfigRender<    StoryRefreshPriceConfig      >
{
	tableName = "StoryRefreshPrice";


    ParseCsv(csv: string[] )
    {
		let config = new StoryRefreshPriceConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.price =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "price"  )   )   );

		


		this.addConfig(config);
    }
}