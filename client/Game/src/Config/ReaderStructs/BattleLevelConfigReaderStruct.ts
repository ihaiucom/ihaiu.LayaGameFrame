/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BattleLevelConfig from "../ConfigExtends/BattleLevelConfig";


export default class BattleLevelConfigReaderStruct extends CsvConfigRender<    BattleLevelConfig      >
{
	tableName = "BattleLevel";


    ParseCsv(csv: string[] )
    {
		let config = new BattleLevelConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type_con = csvGetInt(csv,  this.GetHeadIndex(  "type_con"  )   );
		config.tag_con = csvGetInt(csv,  this.GetHeadIndex(  "tag_con"  )   );
		config.character_con = csvGetInt(csv,  this.GetHeadIndex(  "character_con"  )   );

		


		this.addConfig(config);
    }
}