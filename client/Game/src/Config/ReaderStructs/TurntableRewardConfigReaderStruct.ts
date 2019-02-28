/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import TurntableRewardConfig from "../ConfigExtends/TurntableRewardConfig";


export default class TurntableRewardConfigReaderStruct extends CsvConfigRender<    TurntableRewardConfig      >
{
	tableName = "TurntableReward";


    ParseCsv(csv: string[] )
    {
		let config = new TurntableRewardConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.itemtype = csvGetInt(csv,  this.GetHeadIndex(  "itemtype"  )   );
		config.itme = csvGetInt(csv,  this.GetHeadIndex(  "itme"  )   );
		config.quantity = csvGetInt(csv,  this.GetHeadIndex(  "quantity"  )   );
		config.weights = csvGetInt(csv,  this.GetHeadIndex(  "weights"  )   );

		


		this.addConfig(config);
    }
}