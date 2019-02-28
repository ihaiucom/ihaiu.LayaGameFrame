/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import TurntableCompleteConfig from "../ConfigExtends/TurntableCompleteConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class TurntableCompleteConfigReaderStruct extends CsvConfigRender<    TurntableCompleteConfig      >
{
	tableName = "TurntableComplete";


    ParseCsv(csv: string[] )
    {
		let config = new TurntableCompleteConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.start =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "start"  )   )   );
		config.end =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "end"  )   )   );
		config.Reception = csvGetInt(csv,  this.GetHeadIndex(  "Reception"  )   );
		config.actor1 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "actor1"  )   )   );
		config.actor2 =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "actor2"  )   )   );
		config.integral = csvGetInt(csv,  this.GetHeadIndex(  "integral"  )   );
		config.reward =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );

		


		this.addConfig(config);
    }
}