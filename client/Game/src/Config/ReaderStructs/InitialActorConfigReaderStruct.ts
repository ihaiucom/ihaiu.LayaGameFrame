/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import InitialActorConfig from "../ConfigExtends/InitialActorConfig";


export default class InitialActorConfigReaderStruct extends CsvConfigRender<    InitialActorConfig      >
{
	tableName = "InitialActor";


    ParseCsv(csv: string[] )
    {
		let config = new InitialActorConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.actor_id = csvGetInt(csv,  this.GetHeadIndex(  "actor_id"  )   );

		


		this.addConfig(config);
    }
}