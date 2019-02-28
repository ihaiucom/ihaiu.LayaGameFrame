/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorLoyaltyConfig from "../ConfigExtends/ActorLoyaltyConfig";


export default class ActorLoyaltyConfigReaderStruct extends CsvConfigRender<    ActorLoyaltyConfig      >
{
	tableName = "ActorLoyalty";


    ParseCsv(csv: string[] )
    {
		let config = new ActorLoyaltyConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
		config.exp = csvGetInt(csv,  this.GetHeadIndex(  "exp"  )   );
		config.max_lv = csvGetInt(csv,  this.GetHeadIndex(  "max_lv"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}