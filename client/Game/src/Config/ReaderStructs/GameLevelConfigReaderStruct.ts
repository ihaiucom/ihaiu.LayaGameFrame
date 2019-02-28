/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import GameLevelConfig from "../ConfigExtends/GameLevelConfig";


export default class GameLevelConfigReaderStruct extends CsvConfigRender<    GameLevelConfig      >
{
	tableName = "GameLevel";


    ParseCsv(csv: string[] )
    {
		let config = new GameLevelConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.stall = csvGetInt(csv,  this.GetHeadIndex(  "stall"  )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.pre_id = csvGetInt(csv,  this.GetHeadIndex(  "pre_id"  )   );
		config.next_level = csvGetInt(csv,  this.GetHeadIndex(  "next_level"  )   );

		


		this.addConfig(config);
    }
}