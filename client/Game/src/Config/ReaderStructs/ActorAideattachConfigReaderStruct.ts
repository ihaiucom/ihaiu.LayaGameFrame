/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorAideattachConfig from "../ConfigExtends/ActorAideattachConfig";


export default class ActorAideattachConfigReaderStruct extends CsvConfigRender<    ActorAideattachConfig      >
{
	tableName = "ActorAideattach";


    ParseCsv(csv: string[] )
    {
		let config = new ActorAideattachConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.actor = csvGetInt(csv,  this.GetHeadIndex(  "actor"  )   );
		config.aide_type = csvGetInt(csv,  this.GetHeadIndex(  "aide_type"  )   );
		config.attach_type = csvGetInt(csv,  this.GetHeadIndex(  "attach_type"  )   );
		config.value = csvGetInt(csv,  this.GetHeadIndex(  "value"  )   );
		config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}