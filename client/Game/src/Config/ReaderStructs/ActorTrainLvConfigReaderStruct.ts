/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorTrainLvConfig from "../ConfigExtends/ActorTrainLvConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class ActorTrainLvConfigReaderStruct extends CsvConfigRender<    ActorTrainLvConfig      >
{
	tableName = "ActorTrainLv";


    ParseCsv(csv: string[] )
    {
		let config = new ActorTrainLvConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.star1_vice =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star1_vice"  )   )   );
		config.star1_main =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star1_main"  )   )   );
		config.star2_vice =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star2_vice"  )   )   );
		config.star2_main =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star2_main"  )   )   );
		config.star3_vice =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star3_vice"  )   )   );
		config.star3_main =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star3_main"  )   )   );
		config.star4_vice =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star4_vice"  )   )   );
		config.star4_main =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star4_main"  )   )   );
		config.star5_vice =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star5_vice"  )   )   );
		config.star5_main =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star5_main"  )   )   );
		config.star6_vice =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star6_vice"  )   )   );
		config.star6_main =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "star6_main"  )   )   );
		config.cost =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.diamonds_cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "diamonds_cost"  )   )   );

		


		this.addConfig(config);
    }
}