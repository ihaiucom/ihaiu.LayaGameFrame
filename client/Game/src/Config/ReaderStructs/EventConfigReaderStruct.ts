/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import EventConfig from "../ConfigExtends/EventConfig";
import DTPerformActoin from "../ConfigExtends/DTPerformActoin";
import DTPerformSpeak from "../ConfigExtends/DTPerformSpeak";


export default class EventConfigReaderStruct extends CsvConfigRender<    EventConfig      >
{
	tableName = "Event";


    ParseCsv(csv: string[] )
    {
		let config = new EventConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.model = csvGetInt(csv,  this.GetHeadIndex(  "model"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.action =  DTPerformActoin.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "action"  )   )   );
		config.speak =  DTPerformSpeak.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "speak"  )   )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}