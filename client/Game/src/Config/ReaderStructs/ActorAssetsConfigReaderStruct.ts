/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorAssetsConfig from "../ConfigExtends/ActorAssetsConfig";


export default class ActorAssetsConfigReaderStruct extends CsvConfigRender<    ActorAssetsConfig      >
{
	tableName = "ActorAssets";


    ParseCsv(csv: string[] )
    {
		let config = new ActorAssetsConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.actor_property = csvGetInt(csv,  this.GetHeadIndex(  "actor_property"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}