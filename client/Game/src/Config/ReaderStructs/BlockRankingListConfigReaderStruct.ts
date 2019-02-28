/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BlockRankingListConfig from "../ConfigExtends/BlockRankingListConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class BlockRankingListConfigReaderStruct extends CsvConfigRender<    BlockRankingListConfig      >
{
	tableName = "BlockRankingList";


    ParseCsv(csv: string[] )
    {
		let config = new BlockRankingListConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.rank = csvGetInt(csv,  this.GetHeadIndex(  "rank"  )   );
		config.movie_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "movie_reward"  )   )   );
		config.box_office_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "box_office_reward"  )   )   );
		config.extra_reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "extra_reward"  )   )   );
		config.congratulate_switch = csvGetBoolean(csv,  this.GetHeadIndex(  "congratulate_switch"  )   );
		config.congratulate_reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "congratulate_reward"  )   )   );

		


		this.addConfig(config);
    }
}