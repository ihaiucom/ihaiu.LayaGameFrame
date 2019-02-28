/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import PlayActConfig from "../ConfigExtends/PlayActConfig";


export default class PlayActConfigReaderStruct extends CsvConfigRender<    PlayActConfig      >
{
	tableName = "PlayAct";


    ParseCsv(csv: string[] )
    {
		let config = new PlayActConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.data = csvGetInt(csv,  this.GetHeadIndex(  "data"  )   );
		config.event =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "event"  )   )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}