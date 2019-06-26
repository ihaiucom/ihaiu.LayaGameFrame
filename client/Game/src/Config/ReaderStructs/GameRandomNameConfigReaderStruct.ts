/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import GameRandomNameConfig from "../ConfigExtends/GameRandomNameConfig";


export default class GameRandomNameConfigReaderStruct extends CsvConfigRender<    GameRandomNameConfig      >
{
	tableName = "GameRandomName";


    ParseCsv(csv: string[] )
    {
		let config = new GameRandomNameConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.zh_cn_names =  toStringArray(       csvGetString(csv,  this.GetHeadIndex(  "zh_cn_names"  )   )   );

		


		this.addConfig(config);
    }
}