/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActionConfig from "../ConfigExtends/ActionConfig";
import DTParts from "../ConfigExtends/DTParts";


export default class ActionConfigReaderStruct extends CsvConfigRender<    ActionConfig      >
{
	tableName = "Action";


    ParseCsv(csv: string[] )
    {
		let config = new ActionConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.action = csvGetString(csv,  this.GetHeadIndex(  "action"  )   );
		config.parts =  DTParts.parse(       csvGetString(csv,  this.GetHeadIndex(  "parts"  )   )   );
		config.loop = csvGetInt(csv,  this.GetHeadIndex(  "loop"  )   );
		config.Connect = csvGetInt(csv,  this.GetHeadIndex(  "Connect"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}