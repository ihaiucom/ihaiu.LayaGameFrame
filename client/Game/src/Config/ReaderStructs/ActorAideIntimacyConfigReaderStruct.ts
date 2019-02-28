/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorAideIntimacyConfig from "../ConfigExtends/ActorAideIntimacyConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class ActorAideIntimacyConfigReaderStruct extends CsvConfigRender<    ActorAideIntimacyConfig      >
{
	tableName = "ActorAideIntimacy";


    ParseCsv(csv: string[] )
    {
		let config = new ActorAideIntimacyConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.percent = csvGetInt(csv,  this.GetHeadIndex(  "percent"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}