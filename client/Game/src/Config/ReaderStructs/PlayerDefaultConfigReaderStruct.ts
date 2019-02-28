/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import PlayerDefaultConfig from "../ConfigExtends/PlayerDefaultConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class PlayerDefaultConfigReaderStruct extends CsvConfigRender<    PlayerDefaultConfig      >
{
	tableName = "PlayerDefault";


    ParseCsv(csv: string[] )
    {
		let config = new PlayerDefaultConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.actors =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "actors"  )   )   );
		config.items =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "items"  )   )   );

		


		this.addConfig(config);
    }
}