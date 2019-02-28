/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ServerRankingListConfig from "../ConfigExtends/ServerRankingListConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class ServerRankingListConfigReaderStruct extends CsvConfigRender<    ServerRankingListConfig      >
{
	tableName = "ServerRankingList";


    ParseCsv(csv: string[] )
    {
		let config = new ServerRankingListConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.rank =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "rank"  )   )   );
		config.normal_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "normal_reward"  )   )   );
		config.spec_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "spec_reward"  )   )   );

		


		this.addConfig(config);
    }
}