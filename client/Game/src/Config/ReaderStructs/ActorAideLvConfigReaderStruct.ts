/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorAideLvConfig from "../ConfigExtends/ActorAideLvConfig";


export default class ActorAideLvConfigReaderStruct extends CsvConfigRender<    ActorAideLvConfig      >
{
	tableName = "ActorAideLv";


    ParseCsv(csv: string[] )
    {
		let config = new ActorAideLvConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.lv =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "lv"  )   )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}