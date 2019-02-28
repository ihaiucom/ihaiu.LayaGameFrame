/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorLevelConfig from "../ConfigExtends/ActorLevelConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class ActorLevelConfigReaderStruct extends CsvConfigRender<    ActorLevelConfig      >
{
	tableName = "ActorLevel";


    ParseCsv(csv: string[] )
    {
		let config = new ActorLevelConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.star1_vice = csvGetInt(csv,  this.GetHeadIndex(  "star1_vice"  )   );
		config.star1_main = csvGetInt(csv,  this.GetHeadIndex(  "star1_main"  )   );
		config.star2_vice = csvGetInt(csv,  this.GetHeadIndex(  "star2_vice"  )   );
		config.star2_main = csvGetInt(csv,  this.GetHeadIndex(  "star2_main"  )   );
		config.star3_vice = csvGetInt(csv,  this.GetHeadIndex(  "star3_vice"  )   );
		config.star3_main = csvGetInt(csv,  this.GetHeadIndex(  "star3_main"  )   );
		config.star4_vice = csvGetInt(csv,  this.GetHeadIndex(  "star4_vice"  )   );
		config.star4_main = csvGetInt(csv,  this.GetHeadIndex(  "star4_main"  )   );
		config.star5_vice = csvGetInt(csv,  this.GetHeadIndex(  "star5_vice"  )   );
		config.star5_main = csvGetInt(csv,  this.GetHeadIndex(  "star5_main"  )   );
		config.star6_vice = csvGetInt(csv,  this.GetHeadIndex(  "star6_vice"  )   );
		config.star6_main = csvGetInt(csv,  this.GetHeadIndex(  "star6_main"  )   );
		config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.star1_paycheck = csvGetInt(csv,  this.GetHeadIndex(  "star1_paycheck"  )   );
		config.star2_paycheck = csvGetInt(csv,  this.GetHeadIndex(  "star2_paycheck"  )   );
		config.star3_paycheck = csvGetInt(csv,  this.GetHeadIndex(  "star3_paycheck"  )   );
		config.star4_paycheck = csvGetInt(csv,  this.GetHeadIndex(  "star4_paycheck"  )   );
		config.star5_paycheck = csvGetInt(csv,  this.GetHeadIndex(  "star5_paycheck"  )   );
		config.star6_paycheck = csvGetInt(csv,  this.GetHeadIndex(  "star6_paycheck"  )   );
		config.star1_assets = csvGetInt(csv,  this.GetHeadIndex(  "star1_assets"  )   );
		config.star2_assets = csvGetInt(csv,  this.GetHeadIndex(  "star2_assets"  )   );
		config.star3_assets = csvGetInt(csv,  this.GetHeadIndex(  "star3_assets"  )   );
		config.star4_assets = csvGetInt(csv,  this.GetHeadIndex(  "star4_assets"  )   );
		config.star5_assets = csvGetInt(csv,  this.GetHeadIndex(  "star5_assets"  )   );
		config.star6_assets = csvGetInt(csv,  this.GetHeadIndex(  "star6_assets"  )   );
		config.star1_stamina = csvGetInt(csv,  this.GetHeadIndex(  "star1_stamina"  )   );
		config.star2_stamina = csvGetInt(csv,  this.GetHeadIndex(  "star2_stamina"  )   );
		config.star3_stamina = csvGetInt(csv,  this.GetHeadIndex(  "star3_stamina"  )   );
		config.star4_stamina = csvGetInt(csv,  this.GetHeadIndex(  "star4_stamina"  )   );
		config.star5_stamina = csvGetInt(csv,  this.GetHeadIndex(  "star5_stamina"  )   );
		config.star6_stamina = csvGetInt(csv,  this.GetHeadIndex(  "star6_stamina"  )   );
		config.culture = csvGetInt(csv,  this.GetHeadIndex(  "culture"  )   );
		config.star1_paycheck_max = csvGetInt(csv,  this.GetHeadIndex(  "star1_paycheck_max"  )   );
		config.star2_paycheck_max = csvGetInt(csv,  this.GetHeadIndex(  "star2_paycheck_max"  )   );
		config.star3_paycheck_max = csvGetInt(csv,  this.GetHeadIndex(  "star3_paycheck_max"  )   );
		config.star4_paycheck_max = csvGetInt(csv,  this.GetHeadIndex(  "star4_paycheck_max"  )   );
		config.star5_paycheck_max = csvGetInt(csv,  this.GetHeadIndex(  "star5_paycheck_max"  )   );
		config.star6_paycheck_max = csvGetInt(csv,  this.GetHeadIndex(  "star6_paycheck_max"  )   );

		


		this.addConfig(config);
    }
}